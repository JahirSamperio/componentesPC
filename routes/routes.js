import express from 'express';
import homeRouter from './home.js'

const app = express();

app.use('/', homeRouter);

export default app;