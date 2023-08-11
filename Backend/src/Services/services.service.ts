import {TypeService} from "../Models/typeService";


export class TypesService {
    async findAllTypeServices(){
        const services = TypeService.findAll()
        return services
    }
}
