"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../Controllers/users.controller");
const router = (0, express_1.Router)();
router.get('/', users_controller_1.getUsuarios);
router.post('/', users_controller_1.postUsuario);
exports.default = router;
