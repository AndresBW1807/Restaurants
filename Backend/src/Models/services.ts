import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";

class service extends Model {
    id!: number;
    data!: string;
    date!: Date;
    description!: String;
    typeServiceId!: number;
}

export const Service = db.define<service>("services", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    data: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
    },
    description: {
        type: DataTypes.STRING,
    },
    typeServiceId: {
        type: DataTypes.NUMBER,
    }
});