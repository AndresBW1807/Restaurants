"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contracService_controller_1 = require("../Controllers/contracService.controller");
const router = (0, express_1.Router)();
router.get("/:contracId", contracService_controller_1.getServiceContrac);
exports.default = router;
