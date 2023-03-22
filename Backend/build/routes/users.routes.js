"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../Controllers/users.controller");
const validationJWT_1 = require("../Middleware/validationJWT");
const router = (0, express_1.Router)();
router.get('/', [
    validationJWT_1.validationJwt
], users_controller_1.getUsuarios);
router.post('/', users_controller_1.postUsuario);
exports.default = router;
