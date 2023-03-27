import { Menu } from "../Models/menu";
import { MenuRol } from "../Models/menuRol";
import { SubMenu } from "../Models/submenu";

export class MenuRolService {
  async findAllMenuRol(roleId: any) {
    const menuRol = MenuRol.findAll({
      where: { roleId },
      include: [
        {
          model: Menu,
          attributes: ["nameMenu", "iconMenu"],
        },
      ],
    });
    return menuRol;
  }

  async findAllSubMenu(menuId: any) {
    const submenus = SubMenu.findAll({ where: { menuId } });
    return submenus;
  }
}
