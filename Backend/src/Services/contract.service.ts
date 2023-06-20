import {Contract} from "../Models/contract";

export class ContractService {
    async findAll(idCampus: string){
        const contract = Contract.findAll({
            where: {
                CampusId: idCampus,
                validity: 1
            }
        })
        return contract
    }
}