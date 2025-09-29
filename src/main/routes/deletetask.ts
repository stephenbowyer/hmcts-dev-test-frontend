import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.post('/deletetask', async (req, res) => {
    const { id } = req.body;
    if (req.body.confirm === 'yes') {
      try {
        await axios.delete('http://localhost:4000/api/task/' + id);
        res.redirect('/status/');
      } catch (error) {
        res.redirect('/task/' + id);
      }
    } else {
      res.render('deletetask', { task: { id } });
    }
  });
}
