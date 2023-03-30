import { Router } from "express";
import { getAllRol } from "../Controllers/rol.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/", [validationJwt], getAllRol);
export default router;
