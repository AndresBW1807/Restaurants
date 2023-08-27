"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campushascourses = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../Db/connection"));
const courses_1 = require("./courses");
const campus_1 = require("./campus");
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
campus_1.Campus === null || campus_1.Campus === void 0 ? void 0 : campus_1.Campus.hasMany(exports.campushascourses, { foreignKey: 'campusId' });
exports.campushascourses.belongsTo(campus_1.Campus, { foreignKey: "campusId" });
courses_1.Course === null || courses_1.Course === void 0 ? void 0 : courses_1.Course.hasMany(exports.campushascourses, { foreignKey: "courseId" });
exports.campushascourses.belongsTo(courses_1.Course, { foreignKey: "courseId" });
