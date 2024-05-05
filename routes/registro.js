import {registrarUsuario} from '../controllers/registroController.js'
import { Router } from "express";

const router = Router();

router.post('/registro', registrarUsuario);

export default router;