import { User } from "./../Models/user";
import { Request, Response } from "express";
import { UserService } from "../Services/Users.services";

const user = new UserService();

export const getUsuarios = async (req: Request, res: Response, next: any) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const postUsuario = async (req: Request, res: Response, next: any) => {
  const { body } = req;
  try {
    const users = await user.create(body);
    res.json(users)
  } catch (error) {
    console.error(error)
    next(error);
  }
};
