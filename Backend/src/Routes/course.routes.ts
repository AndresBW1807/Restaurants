import {Router} from "express";
import {validationJwt} from "../Middleware/validationJWT";
import {getAllCourse} from "../Controllers/course.controller";

const router = Router();

router.get("/", [validationJwt], getAllCourse);
export default router;
