import { Router } from "express";
import { getMenuRol } from "../Controllers/menuRol.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/:roleId", getMenuRol);

export default router;