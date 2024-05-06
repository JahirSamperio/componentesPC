import {Router} from 'express';
import {agregarCarrito, eliminarCarrito } from '../controllers/cartController.js'
const router = Router();

router.post('/:usuario_id/:ensamblado_id', agregarCarrito)

router.post('/:id_cart', eliminarCarrito)

export default router;