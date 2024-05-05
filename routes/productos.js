import { productos } from "../controllers/productosController.js";
import {Router} from 'express';

const router = Router();

router.get('/ensamblados', productos);

export default router;
