import {Router} from 'express';
import { agregarComponente, agregarImagen, getComponente, profileComponente } from '../controllers/componentesController.js';
const router = Router();

router.post('/agregarImagen/:id', agregarImagen);

router.post('/agregar', agregarComponente);

router.get('/', getComponente);

router.get('/:id', profileComponente);

export default router;