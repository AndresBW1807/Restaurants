import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

interface UserAttributes{
    nameUser: string,
    lastNameUser: string,
    idNumber: number,
    typeId: string,

}

interface UserInstance extends Model<UserAttributes>{
    nameUser: string,
    lastNameUser: string,
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
},
)