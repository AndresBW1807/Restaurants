import {Contract} from "../Models/contract";

export class ContractService {
    async findAll(idCampus: string){
        const contract = Contract.findOne({
            where: {
                CampusId: idCampus,
                validity: 1
            }
        })
        return contract
    }
}