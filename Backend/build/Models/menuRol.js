"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRol = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const menu_1 = require("./menu");
class menusRol extends sequelize_1.Model {
}
exports.MenuRol = connection_1.default.define("menus_has_roles", {
    menuId: {
        type: sequelize_1.DataTypes.STRING,
    },
    roleId: {
        type: sequelize_1.DataTypes.STRING,
    },
});
menu_1.Menu === null || menu_1.Menu === void 0 ? void 0 : menu_1.Menu.hasMany(exports.MenuRol, { foreignKey: "menuId" });
