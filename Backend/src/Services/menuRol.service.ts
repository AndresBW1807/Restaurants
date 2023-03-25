import { Menu } from "../Models/menu";
import { MenuRol } from "../Models/menuRol";

export class MenuRolService {
  async findAllMenuRol(roleId: any) {
    const menuRol = MenuRol.findAll({
      where: { roleId },
      include: [
        {
          model: Menu,
          attributes: ["nameMenu", "iconMenu", "pathMenu"],
        },
      ],
    });
    return menuRol;
  }
}
