import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";
import { Menus } from "./menus";

interface menuRolAttributes {
  menuId: number;
  roleId: number;
}

interface menuRolInstance extends Model<menuRolAttributes> {}

export const MenuRol = db.define<menuRolInstance>("menus_has_roles", {
  menuId: {
    type: DataTypes.NUMBER,
  },
  roleId: {
    type: DataTypes.NUMBER,
  },
});

MenuRol.belongsTo(Menus, { foreignKey: "menuId", as: "menus" });

export default MenuRol;