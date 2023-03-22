import { Request, Response } from "express";
import { UserService } from "../Services/User.service";


const userService = new UserService();

export const getUsuarios = async (req: Request, res: Response, next: any) => {
  try {
    const users = await userService.find()
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const postUsuario = async (req: Request, res: Response, next: any) => {
  const { body } = req;
  try {

    //guardar en base de datos
    const user = await userService.create(body)
    res.json(user)
  } catch (error) {
    next(error);
  }
};
