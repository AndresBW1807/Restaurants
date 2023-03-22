import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

interface UserAttributes{
    nameUser: string,
    lastNameUser: string,
    idNumber: number,
    typeId: string,
    user: string,
    password: string,
    RolId: number
}

interface UserInstance extends Model<UserAttributes>{
    nameUser: string,
    lastNameUser: string,
    user: string,
    password: string,
    idRol: number
}

export const User = db.define <UserInstance>('users', {
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