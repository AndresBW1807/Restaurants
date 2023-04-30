import { Request, Response } from "express";
import {CampusService} from "../Services/campus.service";

const campusService = new CampusService();

export const getAllCampus = async (req: Request, res: Response, next: any) => {
    try {
        const campus = await campusService.findAll()
        res.json(campus);
    } catch (error) {
        next(error);
    }
};