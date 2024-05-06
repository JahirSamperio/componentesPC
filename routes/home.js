import {Router} from 'express';
import { home, perfilEnsamblado, registro } from '../controllers/homeController.js';

const router = Router();

router.get('/', home);
router.get('/perfil/:id', perfilEnsamblado)
router.get('/registro', registro);


export default router;