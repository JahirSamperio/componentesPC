import {Router} from 'express';
import {agregarFavoritos } from '../controllers/favoritosController.js'
const router = Router();

router.post('/:usuario_id/:ensamblado_id', agregarFavoritos)

export default router;