import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";

class contract extends Model {
    id!: number;
    company!: string;
    validity!: Boolean;
    campusId!: number;
    createdAt!: Date;
}

export const Contract = db.define<contract>("contracs", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    company: {
        type: DataTypes.STRING,
    },
    validity: {
        type: DataTypes.BOOLEAN,
    },
    campusId: {
        type: DataTypes.NUMBER
    },
    createdAt: {
        type: DataTypes.DATE
    }
});