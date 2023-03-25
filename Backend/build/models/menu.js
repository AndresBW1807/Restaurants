"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const menuRol_1 = require("./menuRol");
class menus extends sequelize_1.Model {
}
exports.Menu = connection_1.default.define("menus", {
    nameMenu: {
        type: sequelize_1.DataTypes.STRING,
    },
    iconMenu: {
        type: sequelize_1.DataTypes.STRING,
    },
    pathMenu: {
        type: sequelize_1.DataTypes.STRING,
    },
});
menuRol_1.MenuRol.belongsTo(exports.Menu, { foreignKey: "menuId" });
