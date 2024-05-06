import { autenticar, cerrarSesion } from "../controllers/loginController.js";
import { Router } from "express";

const router = Router()

router.post('/login',autenticar)

router.post('/logout',cerrarSesion)

export default router