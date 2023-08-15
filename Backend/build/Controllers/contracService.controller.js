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
exports.PutService = exports.PostService = exports.getServicesInfo = exports.getServiceContracByTypeService = exports.getServiceContrac = void 0;
const contracService_service_1 = require("../Services/contracService.service");
const services_1 = require("../Models/services");
const contracsServices_1 = require("../Models/contracsServices");
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
const getServicesInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contracId = req.params.contracId;
    try {
        const contracService = yield contracServiceService.findAllServiceContracType(contracId);
        res.json(contracService);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getServicesInfo = getServicesInfo;
const PostService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { typeServiceId } = req.body;
    const { contracId } = req.params;
    try {
        // Verificar si ya existe un servicio con el mismo tipo para este contrato
        const existingService = yield services_1.Service.findOne({
            where: { typeServiceId }
        });
        if (existingService) {
            const existingContractService = yield contracsServices_1.contracshasservices.findOne({
                where: {
                    serviceId: existingService.id,
                    contracId
                }
            });
            if (existingContractService) {
                return res.status(400).json({ error: 'Este contrato ya tiene un servicio con este tipo de servicio.' });
            }
        }
        // Crear el nuevo servicio
        const newService = yield services_1.Service.create(body);
        // Crear la entrada en ContratosHasService
        yield contracsServices_1.contracshasservices.create({ contracId, serviceId: newService.id });
        return res.status(201).json(newService);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al crear el servicio.' });
    }
});
exports.PostService = PostService;
const PutService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        console.log(body);
        const serviceToUpdate = yield services_1.Service.findByPk(body.id);
        if (!serviceToUpdate) {
            return res.status(404).json({ error: 'El servicio no existe.' });
        }
        // Crear el nuevo servicio
        yield serviceToUpdate.update(body);
        // Crear la entrada en ContratosHasService
        return res.status(201).json({ message: 'Success' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al crear el servicio.' });
    }
});
exports.PutService = PutService;
