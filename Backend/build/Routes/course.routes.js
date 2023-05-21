"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationJWT_1 = require("../Middleware/validationJWT");
const course_controller_1 = require("../Controllers/course.controller");
const router = (0, express_1.Router)();
router.get("/", [validationJWT_1.validationJwt], course_controller_1.getAllCourse);
exports.default = router;
