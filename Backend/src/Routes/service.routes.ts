import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {getService} from "../Controllers/TypeServices.controller";



const router = Router();

router.get("/", getService);
export default router;
