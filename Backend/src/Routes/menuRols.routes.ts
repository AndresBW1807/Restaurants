import { Router } from 'express';
import { getMenuRol } from '../Controllers/menuRol.contoller';


const router = Router();

router.get('/rol', getMenuRol)
export default router;