"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campus = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
class campus extends sequelize_1.Model {
}
exports.Campus = connection_1.default.define("campus", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    instituteId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    municipalitiesId: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
