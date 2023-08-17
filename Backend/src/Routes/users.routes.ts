import { Router } from "express";
import {
    getGraphOneServ,
    getUserbyCampus,
    getUsersWithAttendance,
    getUsuarios,
    getUsuariosUnassistance,
    postUsuario, postUsuariosUnassistance, updateUsuario
} from "../Controllers/users.controller";
import { validationJwt } from "../Middleware/validationJWT";

const router = Router();

router.get("/", [validationJwt],  getUsuarios);
router.post("/", [validationJwt], postUsuario);
router.get("/:campusId", [validationJwt], getUserbyCampus);
router.get('/unassistance/campusId/:campusId/service/:serviceId', [validationJwt],  getUsuariosUnassistance)
router.get('/Attendance/campusId/:campusId/service/:serviceId', [validationJwt], getUsersWithAttendance)
router.post('/unassistance/campusId/:campusId/service/:serviceId', [validationJwt], postUsuariosUnassistance)
router.put("/updateUser/:userId", [validationJwt], updateUsuario);
router.get("/campus/:campusId",  getGraphOneServ);
export default router;
