import { formatDueDate, formatStatus, getStatusTagClass } from '../helpers/taskHelpers';
import { Task } from '../types/task';

import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/status', async (req, res) => {
    try {
      const response = await axios.get('http://localhost:4000/api/task/status');
      response.data.forEach((t: string[]) => {
        t[2] = formatStatus(t[0]);
        t[3] = getStatusTagClass(t[0]);
      });
      res.render('status', { statusList: response.data });
    } catch (error) {
      res.render('status', {});
    }
  });
  app.get('/status/:statusType', async (req, res) => {
    const statusType = req.params.statusType;
    try {
      let url = 'http://localhost:4000/api/task';
      if (statusType !== 'all') {
        url += `?status=${statusType}`;
      }
      const response = await axios.get(url);
      response.data.forEach((t: Task) => {
        t.formattedDueDate = formatDueDate(t.dueDate);
        t.formattedStatus = formatStatus(t.status);
        t.statusClass = getStatusTagClass(t.status);
      });
      res.render('tasklist', { taskList: response.data, statusType });
    } catch (error) {
      res.render('status', {});
    }
  });
}
