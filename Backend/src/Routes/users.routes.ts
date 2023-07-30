import { Router } from "express";
import {
    getUserbyCampus,
    getUsersWithAttendance,
    getUsuarios,
    getUsuariosUnassistance,
    postUsuario, postUsuariosUnassistance
} from "../Controllers/users.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/", [validationJwt],  getUsuarios);
router.post("/", [validationJwt], postUsuario);
router.get("/:campusId", [validationJwt], getUserbyCampus);
router.get('/unassistance/campusId/:campusId/service/:serviceId', [validationJwt], getUsuariosUnassistance)
router.get('/Attendance/campusId/:campusId/service/:serviceId',  getUsersWithAttendance)
router.post('/unassistance/campusId/:campusId/service/:serviceId', [validationJwt], postUsuariosUnassistance)
export default router;
