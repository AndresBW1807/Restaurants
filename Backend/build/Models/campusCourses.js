"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campushascourses = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const courses_1 = require("./courses");
class campusCourse extends sequelize_1.Model {
}
exports.campushascourses = connection_1.default.define('campushascourses', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    campusId: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    courseId: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
courses_1.Course === null || courses_1.Course === void 0 ? void 0 : courses_1.Course.hasMany(exports.campushascourses, { foreignKey: "courseId" });
