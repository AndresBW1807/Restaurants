import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {GetAssistanceYear, postAssistance} from "../Controllers/checkList.controller";


const router = Router();

router.post("/", [validationJwt], postAssistance);
router.get("/:campusId", GetAssistanceYear);
export default router;
