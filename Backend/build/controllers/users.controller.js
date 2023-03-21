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
const Users_services_1 = require("../Services/Users.services");
const user = new Users_services_1.UserService();
const getUsuarios = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user.find();
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
        const users = yield user.create(body);
        res.json(users);
    }
    catch (error) {
        console.error(error);
        next(error);
    }
});
exports.postUsuario = postUsuario;
