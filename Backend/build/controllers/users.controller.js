"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getUserbyCampus = exports.postUsuario = exports.getUsersWithAttendance = exports.getUsuariosUnassistance = exports.getUsuarios = void 0;
const User_service_1 = require("../Services/User.service");
const user_1 = require("../Models/user");
const bcryptjs = __importStar(require("bcryptjs"));
const userService = new User_service_1.UserService();
const getUsuarios = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userService.find();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsuarios = getUsuarios;
const getUsuariosUnassistance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const campusId = req.params.campusId;
    const serviceId = req.params.serviceId;
    try {
        const users = yield userService.getUsersAssistanceFalse(campusId, serviceId);
        res.json(users);
    }
    catch (error) {
        next(error);
        console.log(error);
    }
});
exports.getUsuariosUnassistance = getUsuariosUnassistance;
const getUsersWithAttendance = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const campusId = req.params.campusId;
    const serviceId = req.params.serviceId;
    try {
        const users = yield userService.getUsersWithAttendance(campusId, serviceId);
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsersWithAttendance = getUsersWithAttendance;
const postUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const user = yield user_1.User.create(body);
        const saltRounds = 10; // Número de rondas de encriptación
        const hashedPassword = bcryptjs.hashSync(body.password, saltRounds);
        user.set('password', hashedPassword); // Guardar la contraseña encriptada en el modelo User
        yield user.save(); // Guardar el usuario en la base de datos
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.postUsuario = postUsuario;
const getUserbyCampus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const campusId = req.params.campusId;
    try {
        const users = yield userService.getUsersByCampus(campusId);
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getUserbyCampus = getUserbyCampus;
