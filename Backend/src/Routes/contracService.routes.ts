import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {
    getServiceContrac,
    getServiceContracByTypeService,
    getServicesInfo, PostService, PutService
} from "../Controllers/contracService.controller";


const router = Router();

router.get("/:contracId", [validationJwt], getServiceContrac);
router.get("/service/:contracId", getServicesInfo);
router.get('/contrac/:contracId/typeService/:typeServiceId', [validationJwt], getServiceContracByTypeService)
router.post("/:contracId", PostService);
router.put("/:contracId", PutService);
export default router;
