"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
class roles extends sequelize_1.Model {
}
exports.Rol = connection_1.default.define("roles", {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    nameRol: {
        type: sequelize_1.DataTypes.STRING,
    }
});
