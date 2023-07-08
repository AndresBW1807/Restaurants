"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationJWT_1 = require("../Middleware/validationJWT");
const campusCourse_controller_1 = require("../Controllers/campusCourse.controller");
const router = (0, express_1.Router)();
router.get("/:campusId", [validationJWT_1.validationJwt], campusCourse_controller_1.getCampusCourse);
exports.default = router;
