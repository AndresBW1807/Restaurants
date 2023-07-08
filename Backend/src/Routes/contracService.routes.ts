import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {getServiceContrac, getServiceContracByTypeService} from "../Controllers/contracService.controller";


const router = Router();

router.get("/:contracId", [validationJwt], getServiceContrac);
router.get('/contrac/:contracId/typeService/:typeServiceId', [validationJwt], getServiceContracByTypeService)
export default router;