"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
class contract extends sequelize_1.Model {
}
exports.Contract = connection_1.default.define("contracs", {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    company: {
        type: sequelize_1.DataTypes.STRING,
    },
    validity: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    campusId: {
        type: sequelize_1.DataTypes.NUMBER
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
