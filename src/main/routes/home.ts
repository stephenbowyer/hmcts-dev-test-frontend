import { Application } from 'express';

export default function (app: Application): void {
  app.get('/', async (req, res) => {
    res.render('home');
  });

  app.use((req, res) => {
    res.status(404).render('not-found');
  });
}
