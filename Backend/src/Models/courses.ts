import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";
import {campushascourses} from "./campusCourses";


class course extends Model {
    nomenclature!: string;
}

export const Course = db.define<course>("courses", {
    nomenclature: {
        type: DataTypes.STRING
    }
});


