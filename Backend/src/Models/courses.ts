import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

class courses extends Model {
    grade!: string;
    day!: string;
    nomenclature!: string;
}

export const Course = db.define<courses>("courses", {
    grade: {
        type: DataTypes.STRING,
    },
    day: {
        type: DataTypes.STRING,
    },
    nomenclature: {
        type: DataTypes.STRING
    }
});
