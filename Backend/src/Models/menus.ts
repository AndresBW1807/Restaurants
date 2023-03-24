import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";
import MenuRol from "./menuRol";

interface MenusAttributes {
  nameMenu: string;
  iconMenu: string;
  pathMenu: string;
}

interface MenusInstance extends Model<MenusAttributes> {}

export const Menus = db.define<MenusInstance>("menus", {
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

Menus.hasMany(MenuRol, { foreignKey: "menuId", as: "menus" });