import {Router} from 'express';
import {agregarFavoritos, eliminarFavoritos } from '../controllers/favoritosController.js'
const router = Router();

router.post('/:usuario_id/:ensamblado_id', agregarFavoritos)

router.post('/:id_favorito', eliminarFavoritos)

export default router;