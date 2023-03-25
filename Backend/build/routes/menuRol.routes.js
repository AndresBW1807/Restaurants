"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menuRol_controller_1 = require("../Controllers/menuRol.controller");
const router = (0, express_1.Router)();
router.get("/:roleId", menuRol_controller_1.getMenuRol);
exports.default = router;
