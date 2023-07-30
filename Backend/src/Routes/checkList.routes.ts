import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {postAssistance} from "../Controllers/checkList.controller";


const router = Router();

router.post("/", [validationJwt], postAssistance);
export default router;
