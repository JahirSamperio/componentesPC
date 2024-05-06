import { Router } from "express";
import { callComponentes, getCategorias} from "../controllers/ensambladosController.js";
const router = Router();

router.get("/componentes", callComponentes)
router.get("/categoria", getCategorias)

export default router;