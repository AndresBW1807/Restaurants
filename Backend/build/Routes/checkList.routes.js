"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkList_controller_1 = require("../Controllers/checkList.controller");
const router = (0, express_1.Router)();
router.post("/", checkList_controller_1.postAssistance);
exports.default = router;
