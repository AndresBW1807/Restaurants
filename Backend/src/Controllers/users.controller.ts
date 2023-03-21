import { User } from "./../Models/user";
import { Request, Response } from "express";
import { UserDTO } from "../DTOs/User.Dto";
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
    const user = await userService.create(body)
    res.json(user)
  } catch (error) {
    console.error(error)
    next(error);
  }
};
