import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

class roles extends Model {
    id!: number;
    nameRol!: string;
  }
  
  export const Rol = db.define<roles>("roles", {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    nameRol: {
      type: DataTypes.STRING,
    }
  });