"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationJWT_1 = require("../Middleware/validationJWT");
const contract_controller_1 = require("../Controllers/contract.controller");
const router = (0, express_1.Router)();
router.get("/:campusId", [validationJWT_1.validationJwt], contract_controller_1.getContractId);
exports.default = router;
