import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";
import {User} from "./user";
import {Service} from "./services";

class checklist extends Model {
    id!: number;
    assistance!: boolean;
    date!: Date;
    serviceId!: number;
    userId!: number;
    user!: any;
    createdAt!: string | number | Date;
}

export const CheckList = db.define<checklist>("checklist", {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    assistance: {
        type: DataTypes.BOOLEAN,
    },
    date: {
        type: DataTypes.DATE,
    },
    serviceId: {
        type: DataTypes.NUMBER
    },
    userId: {
        type: DataTypes.NUMBER
    }
});

Service.hasMany(CheckList, { foreignKey: 'serviceId'})
CheckList.belongsTo(Service, {foreignKey: 'serviceId'})

User.hasMany(CheckList, { foreignKey: 'userId'})
CheckList.belongsTo(User, {foreignKey: 'userId'})

