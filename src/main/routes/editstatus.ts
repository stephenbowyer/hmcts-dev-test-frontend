import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/editstatus/:taskId', async (req, res) => {
    const taskId = req.params.taskId;
    try {
      const response = await axios.get(`http://localhost:4000/api/task/${taskId}`);
      res.render('editstatus', { task: response.data });
    } catch (error) {
      res.redirect('/status');
    }
  });

  app.post('/editstatus/:taskId', async (req, res) => {
    const taskId = req.params.taskId;
    if (req.body.status !== undefined && req.body.status.length > 0) {
      const { id, status } = req.body;
      try {
        const response = await axios.patch(`http://localhost:4000/api/task/${id}`, {
          status,
        });
        res.redirect('/task/' + response.data.id);
      } catch (error) {
        res.redirect('/status');
      }
    } else {
      res.redirect('/task/' + taskId);
    }
  });
}
