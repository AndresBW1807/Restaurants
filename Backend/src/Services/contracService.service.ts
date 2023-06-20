import {contracshasservices} from "../Models/contracsServices";
import {Service} from "../Models/services";


export class contractServiceService {
    async findAllServiceContrac(contractId: string) {
        const campusCourse = contracshasservices.findAll({
            where: {contracId: contractId},
            include: [
                {
                    model: Service,
                    attributes: ['typeServiceId']
                }
            ],
        })
        return campusCourse
    }
}