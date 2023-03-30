"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_controller_1 = require("../Controllers/rol.controller");
const validationJWT_1 = require("../Middleware/validationJWT");
const router = (0, express_1.Router)();
router.get("/", [validationJWT_1.validationJwt], rol_controller_1.getAllRol);
exports.default = router;
