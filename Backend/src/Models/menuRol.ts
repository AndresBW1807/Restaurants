import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";
import { Menu } from "./menu";

class menusRol extends Model {
  menuId!: string;
  roleId!: string;
}

export const MenuRol = db.define<menusRol>("menus_has_roles", {
  menuId: {
    type: DataTypes.STRING,
  },
  roleId: {
    type: DataTypes.STRING,
  },
});

Menu?.hasMany(MenuRol, { foreignKey: "menuId" });
