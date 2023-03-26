import { DataTypes, Model } from "sequelize";
import db from "../Db/connection";

class submenus extends Model {
  nameSubMenu!: string;
  pathSubMenu!: string;
  menuId!: number;
}

export const SubMenu = db.define<submenus>("sub_menus", {
  nameSubMenu: {
    type: DataTypes.STRING,
  },
  pathSubMenu: {
    type: DataTypes.STRING,
  },
  menuId: {
    type: DataTypes.NUMBER,
  },
});

