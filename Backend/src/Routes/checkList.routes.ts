import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {postAssistance} from "../Controllers/checkList.controller";


const router = Router();

router.post("/", postAssistance);
export default router;