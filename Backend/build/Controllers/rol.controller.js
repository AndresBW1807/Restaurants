"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRol = void 0;
const rol_service_1 = require("../Services/rol.service");
const rolService = new rol_service_1.RolService();
const getAllRol = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield rolService.findAll();
        res.json(roles);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllRol = getAllRol;
