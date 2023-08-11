import {contracshasservices} from "../Models/contracsServices";
import {Service} from "../Models/services";
import {TypeService} from "../Models/typeService";


export class contractServiceService {
    async findAllServiceContrac(contractId: string) {
        const campusCourse = contracshasservices.findAll({
            where: {contracId: contractId},
            include: [
                {
                    model: Service,
                    attributes: ['typeServiceId', 'id', 'data']
                }
            ],
        })
        return campusCourse
    }

    async findAllServiceContractTypeService(contractId: string, typeServiceId: string) {
        const campusCourse = contracshasservices.findOne({
            where: {contracId: contractId},
            include: [
                {
                    model: Service,
                    where: {typeServiceId: typeServiceId},
                    attributes: ['typeServiceId', 'id', 'data']
                }
            ],
        })
        return campusCourse
    }

    async findAllServiceContracType(contractId: string) {
        const campusCourse = contracshasservices.findAll({
            where: {contracId: contractId},
            attributes:[],
            include: [
                {
                    model: Service,
                    attributes: ['typeServiceId', 'id', 'data'],
                    include: [
                        {
                            model: TypeService,
                            attributes: ['Type']
                        }
                    ]
                }
            ],
        })
        return campusCourse
    }
}
