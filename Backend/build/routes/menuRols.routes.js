"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menuRol_contoller_1 = require("../Controllers/menuRol.contoller");
const router = (0, express_1.Router)();
router.get('/rol', menuRol_contoller_1.getMenuRol);
exports.default = router;
