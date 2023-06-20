import { Request, Response } from "express";
import {contractServiceService} from "../Services/contracService.service";


const contracServiceService = new contractServiceService()
export const getServiceContrac = async (req: Request, res: Response, next: any) => {
    const contracId = req.params.contracId;
    try {
        const contracService = await contracServiceService.findAllServiceContrac(contracId);
        res.json(contracService);
    } catch (error) {
        next(error);
    }
};