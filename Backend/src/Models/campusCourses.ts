import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";
import {Campus} from "./campus";
import {Course} from "./courses";
import {Menu} from "./menu";
import {MenuRol} from "./menuRol";

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

Course?.hasMany(campushascourses, { foreignKey: "courseId" });





