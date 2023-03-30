import { Request, Response } from "express";
import { RolService } from "../Services/rol.service";

const rolService = new RolService();

export const getAllRol = async (req: Request, res: Response, next: any) => {
    try {
      const roles = await rolService.findAll()
      res.json(roles);
    } catch (error) {
      next(error);
    }
  };