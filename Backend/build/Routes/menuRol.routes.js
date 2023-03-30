"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menuRol_controller_1 = require("../Controllers/menuRol.controller");
const validationJWT_1 = require("../Middleware/validationJWT");
const router = (0, express_1.Router)();
router.get("/:roleId", [validationJWT_1.validationJwt], menuRol_controller_1.getMenuRol);
router.get("/subMenu/:menuId", [validationJWT_1.validationJwt], menuRol_controller_1.getSubMenu);
exports.default = router;
