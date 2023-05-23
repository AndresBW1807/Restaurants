"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campusCourse_controller_1 = require("../Controllers/campusCourse.controller");
const router = (0, express_1.Router)();
router.get("/:campusId", campusCourse_controller_1.getCampusCourse);
exports.default = router;
