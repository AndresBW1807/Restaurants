import { Router } from "express";
import { getUsuarios, postUsuario } from "../Controllers/users.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/", [validationJwt], getUsuarios);
router.post("/", [validationJwt], postUsuario);
export default router;
