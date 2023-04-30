import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {getAllCampus} from "../Controllers/campus.controller";

const router = Router();

router.get("/", [validationJwt], getAllCampus);
export default router;
