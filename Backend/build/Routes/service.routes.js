"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TypeServices_controller_1 = require("../Controllers/TypeServices.controller");
const router = (0, express_1.Router)();
router.get("/", TypeServices_controller_1.getService);
exports.default = router;
