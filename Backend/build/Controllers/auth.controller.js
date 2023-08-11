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
const campusCourses_1 = require("../Models/campusCourses");
const campus_1 = require("../Models/campus");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = req.body;
    try {
        // Verificar si el usuario existe
        const userVer = yield user_1.User.findOne({
            where: { user },
            include: [
                {
                    model: campusCourses_1.campushascourses,
                    attributes: ['campusId'],
                    include: [
                        {
                            model: campus_1.Campus,
                            attributes: ['name']
                        }
                    ]
                },
            ],
        });
        // Verificar Usuario
        if (!userVer) {
            return res.status(400).json({
                msg: 'El usuario es incorrecto',
            });
        }
        // Verificar Contraseña
        const userPass = bcryptjs_1.default.compareSync(password, userVer.password);
        if (!userPass) {
            return res.status(400).json({
                msg: 'La contraseña es incorrecta',
            });
        }
        // Obtener el campus del usuario
        const campus = userVer.campushascourse.campusId;
        const campusName = userVer.campushascourse.campus.name;
        // Crear el payload con el campus incluido
        const payload = {
            nameUser: userVer.nameUser,
            lastNameUser: userVer.lastNameUser,
            user: userVer.user,
            RolId: userVer.RolId,
            campus,
            campusName
        };
        // Crear el token payload
        const token = jsonwebtoken_1.default.sign(payload, 'R3ZT4UR4TZ', {
            expiresIn: '24h',
        });
        // Retornar el token en la respuesta
        res.json({
            token,
        });
    }
    catch (error) {
        // Manejo de errores
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({
            msg: 'Error en el servidor',
        });
    }
});
exports.login = login;
