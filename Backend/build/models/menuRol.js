"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRol = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const menus_1 = require("./menus");
exports.MenuRol = connection_1.default.define("menus_has_roles", {
    menuId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    roleId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
});
exports.MenuRol.belongsTo(menus_1.Menus, { foreignKey: "menuId", as: "menus" });
exports.default = exports.MenuRol;
