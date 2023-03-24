import { MenuRol } from "../Models/menuRol";
import { Menus } from "../Models/menus";

export class MenuRolService {
  async findAllMenus(roleId: number) {
    const menuRolConMenus = await MenuRol.findAll({
      where: { roleId },
      include: [
        {
          model: Menus,
          as: "menuRoles",
        },
      ],
    });

    if (!menuRolConMenus) {
      throw new Error("No se encontró el registro con idRol");
    }

    return menuRolConMenus;
  }
}
