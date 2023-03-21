import { User } from "./../Models/user";
import { Request, Response } from "express";
import { UserDTO } from "../DTOs/User.Dto";

export const getUsuarios = async (req: Request, res: Response, next: any) => {
  try {
    const users = await User.findAll();
    const usersDTOs = users.map(
      (user) => new UserDTO(user.nameUser, user.lastNameUser)
    );
    res.json(usersDTOs);
  } catch (error) {
    next(error);
  }
};

export const postUsuario = async (req: Request, res: Response, next: any) => {
  const { body } = req;
  try {
    const user = await User.create(body);
    res.json(user)
  } catch (error) {
    console.error(error)
    next(error);
  }
};
