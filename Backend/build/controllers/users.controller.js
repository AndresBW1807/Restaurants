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
exports.postUsuario = exports.getUsuarios = void 0;
const User_service_1 = require("../Services/User.service");
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
const postUsuario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //guardar en base de datos
        const user = yield userService.create(body);
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.postUsuario = postUsuario;
