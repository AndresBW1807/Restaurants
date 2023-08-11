import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";


class typeservice extends Model {
    id!: number;
    Type!: string;
}

export const TypeService = db.define<typeservice>("typeservices", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    Type: {
        type: DataTypes.STRING,
    }
});

