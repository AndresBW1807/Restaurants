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
exports.getAllCampus = void 0;
const campus_service_1 = require("../Services/campus.service");
const campusService = new campus_service_1.CampusService();
const getAllCampus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const campus = yield campusService.findAll();
        res.json(campus);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCampus = getAllCampus;
