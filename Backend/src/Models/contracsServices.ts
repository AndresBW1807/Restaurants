import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";
import {Service} from "./services";


class contracsService extends Model {
    id!: number;
    contracId!: number;
    serviceId!: number;
}

export const contracshasservices = db.define<contracsService>('contracshasservices', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    contracId: {
        type: DataTypes.NUMBER,
    },
    serviceId: {
        type: DataTypes.NUMBER
    }
});

Service?.hasMany(contracshasservices, { foreignKey: "serviceId" });
contracshasservices.belongsTo(Service, { foreignKey: "serviceId" });