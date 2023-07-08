import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

class campuses extends Model {
    id!: number;
    name!: string;
    instituteId!: number;
    municipalitiesId!: number;
}

export const Campus = db.define<campuses>("campuses", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    instituteId: {
        type: DataTypes.NUMBER,
    },
    municipalitiesId: {
        type: DataTypes.NUMBER
    }
});



