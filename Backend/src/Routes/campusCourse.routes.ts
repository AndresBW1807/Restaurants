import { Router } from "express";
import { validationJwt } from "../Middleware/validationJWT";
import {getCampusCourse} from "../Controllers/campusCourse.controller";

const router = Router();

router.get("/:campusId", [validationJwt], getCampusCourse);

export default router
