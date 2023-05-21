"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationJWT_1 = require("../Middleware/validationJWT");
const campus_controller_1 = require("../Controllers/campus.controller");
const router = (0, express_1.Router)();
router.get("/", [validationJWT_1.validationJwt], campus_controller_1.getAllCampus);
exports.default = router;
