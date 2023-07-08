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
exports.getServiceContracByTypeService = exports.getServiceContrac = void 0;
const contracService_service_1 = require("../Services/contracService.service");
const contracServiceService = new contracService_service_1.contractServiceService();
const getServiceContrac = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contracId = req.params.contracId;
    try {
        const contracService = yield contracServiceService.findAllServiceContrac(contracId);
        res.json(contracService);
    }
    catch (error) {
        next(error);
    }
});
exports.getServiceContrac = getServiceContrac;
const getServiceContracByTypeService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contracId = req.params.contracId;
    const typeServiceId = req.params.typeServiceId;
    try {
        const contracService = yield contracServiceService.findAllServiceContractTypeService(contracId, typeServiceId);
        res.json(contracService);
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.getServiceContracByTypeService = getServiceContracByTypeService;
