import express from 'express';
import homeRouter from './home.js'
import componentesRouter from './componentes.js'
import productosRouter from './productos.js'

const app = express();

app.use('/', homeRouter);

app.use('/componentes', componentesRouter);

app.use('/productos', productosRouter);

export default app;