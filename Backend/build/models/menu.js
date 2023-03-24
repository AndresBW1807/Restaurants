"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const role_1 = require("./role");
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
role_1.Role.belongsToMany(exports.Menu, { through: "menus_has_roles" });
