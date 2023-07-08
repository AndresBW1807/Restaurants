import {Request, Response} from "express";
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

export const getServiceContracByTypeService = async (req: Request, res: Response, next: any) => {
    const contracId = req.params.contracId;
    const typeServiceId = req.params.typeServiceId;
    try {
        const contracService = await contracServiceService.findAllServiceContractTypeService(contracId, typeServiceId);
        res.json(contracService);
    } catch (error) {
        next(error);
        console.log(error)
    }
};