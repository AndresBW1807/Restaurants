import { Request, Response } from "express";
import { MenuRoleService } from "../Services/menuRols.service";

const menuRol = new MenuRoleService()

export const getMenuRol = (req: Request, res: Response, next: any) =>{
  const {body} = req
  const menus = menuRol.getMenuRol(body)
  res.json(menus)
}