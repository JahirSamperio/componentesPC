import {Router} from 'express';
import { home, perfilEnsamblado, registro,favoritos, login, cart} from '../controllers/homeController.js';

const router = Router();

router.get('/', home);
router.get('/perfil/:id', perfilEnsamblado)
router.get('/registro', registro);
router.get('/favorites', favoritos)
router.get('/login', login)
router.get('/cart', cart)


export default router;