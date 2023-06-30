import { Request, Response } from "express";
import {ContractService} from "../Services/contract.service";


const contractService = new ContractService();

export const getContractId = async (req: Request, res: Response, next: any) => {
    const campusId = req.params.campusId;
    try {
        const contract = await contractService.findAll(campusId)
        res.json(contract);
    } catch (error) {
        next(error);
    }
};