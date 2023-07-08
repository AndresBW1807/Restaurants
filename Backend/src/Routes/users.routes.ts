import { Router } from "express";
import {
    getUserbyCampus,
    getUsersWithAttendance,
    getUsuarios,
    getUsuariosUnassistance,
    postUsuario
} from "../Controllers/users.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/",  getUsuarios);
router.post("/", [validationJwt], postUsuario);
router.get("/:campusId", [validationJwt], getUserbyCampus);
router.get('/unassistance/campusId/:campusId/service/:serviceId', getUsuariosUnassistance)
router.get('/Attendance/campusId/:campusId/service/:serviceId', getUsersWithAttendance)
export default router;
