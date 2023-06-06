"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
class course extends sequelize_1.Model {
}
exports.Course = connection_1.default.define("courses", {
    nomenclature: {
        type: sequelize_1.DataTypes.STRING
    }
});
