"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenu = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
class submenus extends sequelize_1.Model {
}
exports.SubMenu = connection_1.default.define("sub_menus", {
    nameSubMenu: {
        type: sequelize_1.DataTypes.STRING,
    },
    pathSubMenu: {
        type: sequelize_1.DataTypes.STRING,
    },
    menuId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
});
