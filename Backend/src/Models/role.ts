import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";
import { Menu } from "./menu";

interface RoleAttributes {
    nameRol: string;
  }
  
  interface RoleInstance extends Model<RoleAttributes> {
    nameRol: string;
    nameMenu: () => Promise<typeof Menu[]>;
  }
  
  export const Role = db.define<RoleInstance>("roles", {
    nameRol: {
      type: DataTypes.STRING,
    },
  });

  Menu?.belongsToMany(Role, { through: "menus_has_roles" });