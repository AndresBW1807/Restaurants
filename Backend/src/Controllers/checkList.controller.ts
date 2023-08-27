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

export const GetAssistanceYear = async (req: Request, res: Response, next: any) => {
    const campusId = req.params.campusId
    try {
        const assistance = await checkListService.getGraphTwo(campusId)
        res.json(assistance);
    } catch (error) {
        next(error);
    }
};
