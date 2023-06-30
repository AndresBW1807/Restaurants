"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contracshasservices = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const services_1 = require("./services");
class contracsService extends sequelize_1.Model {
}
exports.contracshasservices = connection_1.default.define('contracshasservices', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    contracId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    serviceId: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
services_1.Service === null || services_1.Service === void 0 ? void 0 : services_1.Service.hasMany(exports.contracshasservices, { foreignKey: "serviceId" });
exports.contracshasservices.belongsTo(services_1.Service, { foreignKey: "serviceId" });
