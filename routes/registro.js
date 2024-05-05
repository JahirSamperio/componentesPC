import {registrarUsuario} from '../controllers/registroController.js'
import { home, perfilEnsamblado, registro } from '../controllers/homeController.js';

import { Router } from "express";

const router = Router();

router.post('/registrar', registrarUsuario);
router.get('/render', registro);

export default router;