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
exports.contractServiceService = void 0;
const contracsServices_1 = require("../Models/contracsServices");
const services_1 = require("../Models/services");
class contractServiceService {
    findAllServiceContrac(contractId) {
        return __awaiter(this, void 0, void 0, function* () {
            const campusCourse = contracsServices_1.contracshasservices.findAll({
                where: { contracId: contractId },
                include: [
                    {
                        model: services_1.Service,
                        attributes: ['typeServiceId', 'id', 'data']
                    }
                ],
            });
            return campusCourse;
        });
    }
    findAllServiceContractTypeService(contractId, typeServiceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const campusCourse = contracsServices_1.contracshasservices.findOne({
                where: { contracId: contractId },
                include: [
                    {
                        model: services_1.Service,
                        where: { typeServiceId: typeServiceId },
                        attributes: ['typeServiceId', 'id', 'data']
                    }
                ],
            });
            return campusCourse;
        });
    }
}
exports.contractServiceService = contractServiceService;
