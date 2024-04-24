import {Router} from 'express';
import {agregarImagen } from '../controllers/ensambladosController.js';
const router = Router();

router.post('/agregarImagen/:id', agregarImagen);


export default router;