import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

class campus extends Model {
    name!: string;
    instituteId!: number;
    municipalitiesId!: number;
}

export const Campus = db.define<campus>("campus", {
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
