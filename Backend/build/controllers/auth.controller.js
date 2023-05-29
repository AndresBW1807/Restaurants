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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_1 = require("../Models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = req.body;
    // Verificar si el usuario existe
    const userVer = yield user_1.User.findOne({ where: { user } });
    // Verificar Usuario
    if (!userVer) {
        return res.status(400).json({
            msg: "El usuario es incorrecto",
        });
    }
    //Verificar Contraseña
    const userPass = bcryptjs_1.default.compareSync(password, userVer.password);
    if (!userPass) {
        return res.status(400).json({
            msg: "La contraseña es incorrecta",
        });
    }
    //Payload
    const payload = {
        nameUser: userVer.nameUser,
        lastNameUser: userVer.lastNameUser,
        user: userVer.user,
        RolId: userVer.RolId,
        campushascourses_id: userVer.campushascourses_id
    };
    //Crear Token payload
    const token = jsonwebtoken_1.default.sign(payload, "R3ZT4UR4TZ", {
        expiresIn: "24h",
    });
    // Return Token in Response
    res.json({
        token,
    });
});
exports.login = login;
