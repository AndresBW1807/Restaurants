"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validationJwt = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({
            msg: "No hay token"
        });
    }
    try {
        jsonwebtoken_1.default.verify(token, "R3ZT4UR4TZ");
        next();
    }
    catch (e) {
        return res.status(401).json({
            msg: "Token no valido"
        });
    }
};
exports.validationJwt = validationJwt;
