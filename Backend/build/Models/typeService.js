"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeService = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
class typeservice extends sequelize_1.Model {
}
exports.TypeService = connection_1.default.define("typeservices", {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    Type: {
        type: sequelize_1.DataTypes.STRING,
    }
});
