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
exports.getCampusCourse = void 0;
const campusCourse_service_1 = require("../Services/campusCourse.service");
const campusCourseService = new campusCourse_service_1.CampusCourseService();
const getCampusCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const campusId = req.params.campusId;
    try {
        const campusCourse = yield campusCourseService.findAllCampusCourse(campusId);
        res.json(campusCourse);
    }
    catch (error) {
        next(error);
    }
});
exports.getCampusCourse = getCampusCourse;
