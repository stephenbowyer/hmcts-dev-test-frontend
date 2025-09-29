import { formatDueDate, formatStatus, getStatusTagClass } from '../helpers/taskHelpers';
import { Task } from '../types/task';

import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/task', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:4000/api/task');
      response.data.forEach((t: Task) => {
        t.formattedDueDate = formatDueDate(t.dueDate);
        t.formattedStatus = formatStatus(t.status);
      });
      res.render('tasklist', { taskList: response.data, statusClass: getStatusTagClass(response.data[0].status) });
    } catch (error) {
      res.render('tasklist', {});
    }
  });
  app.get('/task/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
      const response = await axios.get(`http://localhost:4000/api/task/${taskId}`);
      response.data.formattedDueDate = formatDueDate(response.data.dueDate);
      response.data.formattedStatus = formatStatus(response.data.status);
      res.render('task', { task: response.data, statusClass: getStatusTagClass(response.data.status) });
    } catch (error) {
      res.render('task', {});
    }
  });
}
