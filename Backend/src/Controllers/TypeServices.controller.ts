import { Request, Response } from "express";
import {TypesService} from "../Services/services.service";



const TypeServiceService = new TypesService();

export const getService= async (req: Request, res: Response, next: any) => {
    try {
        const services = await TypeServiceService.findAllTypeServices()
        res.json(services);
    } catch (error) {
        next(error);
    }
};
