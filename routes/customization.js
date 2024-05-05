import { Router } from "express";
import { callComponentes } from "../controllers/ensambladosController.js";
const router = Router();

router.get("/componentes", callComponentes)

export default router;