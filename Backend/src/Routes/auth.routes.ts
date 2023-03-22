import { Router } from 'express';
import {login} from "../Controllers/auth.controller";
import {check} from "express-validator";

const router = Router();

router.post('/login', login)
export default router;