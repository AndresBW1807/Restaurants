import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";
import {Course} from "./courses";
import {Campus} from "./campus";


class campusCourse extends Model {
    id!: number;
    campusId!: number;
    courseId!: number;
}

export const campushascourses = db.define<campusCourse>('campushascourses', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    campusId: {
        type: DataTypes.NUMBER,
    },
    courseId: {
        type: DataTypes.NUMBER
    }
});

Campus?.hasMany(campushascourses, {foreignKey: 'campusId'});
campushascourses.belongsTo(Campus, { foreignKey: "campusId" });
Course?.hasMany(campushascourses, { foreignKey: "courseId" });
campushascourses.belongsTo(Course, { foreignKey: "courseId" });






