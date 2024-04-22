import express from 'express';
import homeRouter from './home.js'
import componentesRouter from './componentes.js'

const app = express();

app.use('/', homeRouter);

app.use('/componentes', componentesRouter);

export default app;