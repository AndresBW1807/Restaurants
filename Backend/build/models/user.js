"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const campusCourses_1 = require("./campusCourses");
exports.User = connection_1.default.define('users', {
    nameUser: {
        type: sequelize_1.DataTypes.STRING
    },
    lastNameUser: {
        type: sequelize_1.DataTypes.STRING
    },
    idNumber: {
        type: sequelize_1.DataTypes.NUMBER
    },
    typeId: {
        type: sequelize_1.DataTypes.STRING
    },
    user: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    RolId: {
        type: sequelize_1.DataTypes.NUMBER
    },
    campushascourses_id: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
campusCourses_1.campushascourses.hasMany(exports.User, { foreignKey: 'campushascourses_id' });
exports.User.belongsTo(campusCourses_1.campushascourses, { foreignKey: 'campushascourses_id' });
