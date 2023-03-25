import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

interface UserAttributes extends Model{
    nameUser: string,
    lastNameUser: string,
    idNumber: number,
    typeId: string,
    user: string,
    password: string,
    RolId: number
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
    }
},
)