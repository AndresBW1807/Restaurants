import { Router } from "express";
import {getUserbyCampus, getUsuarios, postUsuario} from "../Controllers/users.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/", [validationJwt], getUsuarios);
router.post("/", [validationJwt], postUsuario);
router.get("/:campusId", [validationJwt], getUserbyCampus);
export default router;
