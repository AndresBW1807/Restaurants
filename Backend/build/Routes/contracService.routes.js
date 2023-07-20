"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationJWT_1 = require("../Middleware/validationJWT");
const contracService_controller_1 = require("../Controllers/contracService.controller");
const router = (0, express_1.Router)();
router.get("/:contracId", [validationJWT_1.validationJwt], contracService_controller_1.getServiceContrac);
router.get('/contrac/:contracId/typeService/:typeServiceId', [validationJWT_1.validationJwt], contracService_controller_1.getServiceContracByTypeService);
exports.default = router;