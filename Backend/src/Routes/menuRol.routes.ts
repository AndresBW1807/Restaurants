import { Router } from "express";
import { getMenuRol, getSubMenu } from "../Controllers/menuRol.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/:roleId",[validationJwt], getMenuRol);
router.get("/subMenu/:menuId", [validationJwt], getSubMenu)

export default router
