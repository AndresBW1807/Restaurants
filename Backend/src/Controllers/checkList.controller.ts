import {Request, Response} from "express";
import {CheklistService} from "../Services/cheklist.service";


const checkListService = new CheklistService();

export const postAssistance = async (req: Request, res: Response, next: any) => {
    const {body} = req
    try {
        const assistance = await checkListService.postAssistance(body)
        res.json(assistance);
    } catch (error) {
        next(error);
    }
};