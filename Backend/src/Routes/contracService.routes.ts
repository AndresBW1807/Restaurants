import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {getServiceContrac} from "../Controllers/contracService.controller";


const router = Router();

router.get("/:contracId", getServiceContrac);
export default router;