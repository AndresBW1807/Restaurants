import {DataTypes, Model} from "sequelize";
import db from "../Db/connection";
import {campushascourses} from "./campusCourses";
import {CheckList} from "./checklist";

interface UserAttributes extends Model {
    campushascourse: any;
    nameUser: string,
    lastNameUser: string,
    idNumber: number,
    typeId: string,
    user: string,
    password: string,
    RolId: number,
    campushascourses_id: number
}


export const User = db.define <UserAttributes>('users', {
        nameUser: {
            type: DataTypes.STRING
        },
        lastNameUser: {
            type: DataTypes.STRING
        },
        idNumber: {
            type: DataTypes.NUMBER
        },
        typeId: {
            type: DataTypes.STRING
        },
        user: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        RolId: {
            type: DataTypes.NUMBER
        },
        campushascourses_id: {
            type: DataTypes.NUMBER
        }
    },
)
campushascourses.hasMany(User, { foreignKey: 'campushascourses_id'})
User.belongsTo(campushascourses, {foreignKey: 'campushascourses_id'})

