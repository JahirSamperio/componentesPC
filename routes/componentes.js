import {Router} from 'express';
import { agregarComponente, agregarImagen } from '../controllers/componentesController.js';
const router = Router();

router.post('/agregarImagen/:id', agregarImagen);

router.post('/agregar', agregarComponente);

export default router;