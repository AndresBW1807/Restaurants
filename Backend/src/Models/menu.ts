import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";
import { Role } from "./role";

interface MenuAttributes {
    nameMenu: string;
    iconMenu: string;
    pathMenu: string;
  }
  
  interface MenuInstance extends Model<MenuAttributes> {
    nameMenu: string;
    iconMenu: string;
    pathMenu: string;
  }
  
  export const Menu = db.define<MenuInstance>("menus", {
    nameMenu: {
      type: DataTypes.STRING,
    },
    iconMenu: {
      type: DataTypes.STRING,
    },
    pathMenu: {
      type: DataTypes.STRING,
    },
  });
  Role.belongsToMany(Menu, { through: "menus_has_roles" });
  