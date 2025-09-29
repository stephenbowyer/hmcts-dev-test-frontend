import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/createtask', async (req, res) => {
    res.render('edittask');
  });

  app.post('/createtask', async (req, res) => {
    const { title, description, status } = req.body;
    const dueDate = `${req.body['dueDate-year']}-${String(req.body['dueDate-month']).padStart(2, '0')}-${String(req.body['dueDate-day']).padStart(2, '0')}`;
    try {
      const response = await axios.post('http://localhost:4000/api/task', {
        title,
        description,
        dueDate,
        status,
      });
      res.redirect('/task/' + response.data.id);
    } catch (error) {
      res.render('edittask');
    }
  });
}
