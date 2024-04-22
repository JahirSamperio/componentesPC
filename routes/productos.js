import { productos } from "../controllers/productosController.js";
import {Router} from 'express';

const router = Router();

router.get('/', productos);

export default router;
