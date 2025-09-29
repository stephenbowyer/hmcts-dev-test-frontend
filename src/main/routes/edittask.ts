import { formatDueDate, formatStatus } from '../helpers/taskHelpers';

import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.post('/edittask/', async (req, res) => {
    const taskId = req.body.id;
    if (req.body.title === undefined) {
      try {
        const response = await axios.get(`http://localhost:4000/api/task/${taskId}`);
        response.data.formattedDueDate = formatDueDate(response.data.dueDate);
        response.data.formattedStatus = formatStatus(response.data.status);
        res.render('edittask', { task: response.data });
      } catch (error) {
        res.redirect('/status');
      }
    } else {
      const { title, description, status } = req.body;
      try {
        const response = await axios.patch(`http://localhost:4000/api/task/${taskId}`, {
          title,
          description,
          status,
        });
        res.redirect('/task/' + response.data.id);
      } catch (error) {
        res.redirect('/status');
      }
    }
  });
}
