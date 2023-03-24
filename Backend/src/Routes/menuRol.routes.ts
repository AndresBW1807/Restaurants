import { Router } from 'express';
import { getMenus } from '../Controllers/menuRol.contoller';


const router = Router();

router.get('/:roleId', getMenus)

export default router;