import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";
import { MenuRol } from "./menuRol";

class menus extends Model {
  nameMenu!: string;
  iconMenu!: string;
}

export const Menu = db.define<menus>("menus", {
  nameMenu: {
    type: DataTypes.STRING,
  },
  iconMenu: {
    type: DataTypes.STRING,
  }
});

MenuRol.belongsTo(Menu, { foreignKey: "menuId" });
