import { Router } from 'express';
import { getUsuarios, postUsuario } from '../Controllers/users.controller';



const router = Router();

router.get('/', getUsuarios)
router.post('/', postUsuario)


export default router;