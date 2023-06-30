import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {getContractId} from "../Controllers/contract.controller";


const router = Router();

router.get("/:campusId", [validationJwt], getContractId);
export default router;
