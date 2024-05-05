import express from 'express';
import homeRouter from './home.js'
import componentesRouter from './componentes.js'
import productosRouter from './productos.js'
import ensambladosRouter from './ensamblados.js'
import customizationRouter from './customization.js'
import registroRouter from '../routes/registro.js'

const app = express();  

app.use('/', homeRouter);

app.use('/componentes', componentesRouter);

app.use('/productos', productosRouter);

app.use('/ensamblados', ensambladosRouter);

app.use('/customization', customizationRouter);

app.use('/registrar',registroRouter);


export default app;