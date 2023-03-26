import { Request, Response } from "express";
import { MenuRolService } from "../Services/menuRol.service";

const menuRol = new MenuRolService();

export const getMenuRol = async (req: Request, res: Response, next: any) => {
  const roleId = req.params.roleId;
  try {
    const menusRol = await menuRol.findAllMenuRol(roleId);
    res.json(menusRol);
  } catch (error) {
    next(error);
  }
};

export const getSubMenu = async (req: Request, res: Response, next: any) => {
  const menuId = req.params.menuId;
  try {
    const submenus = await menuRol.findAllSubMenu(menuId);
    res.json(submenus);
  } catch (error) {
    console.log(error)
    next(error);
  }
};
