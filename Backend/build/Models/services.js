"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const typeService_1 = require("./typeService");
class service extends sequelize_1.Model {
}
exports.Service = connection_1.default.define("services", {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: sequelize_1.DataTypes.STRING,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    typeServiceId: {
        type: sequelize_1.DataTypes.NUMBER,
    }
});
typeService_1.TypeService.hasMany(exports.Service, { foreignKey: 'typeServiceId' });
exports.Service.belongsTo(typeService_1.TypeService, { foreignKey: 'typeServiceId' });
