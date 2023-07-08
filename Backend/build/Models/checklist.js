"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckList = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const user_1 = require("./user");
class checklist extends sequelize_1.Model {
}
exports.CheckList = connection_1.default.define("checklist", {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    assistance: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
    },
    serviceId: {
        type: sequelize_1.DataTypes.NUMBER
    },
    userId: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
user_1.User.hasMany(exports.CheckList, { foreignKey: 'userId' });
exports.CheckList.belongsTo(user_1.User, { foreignKey: 'userId' });
