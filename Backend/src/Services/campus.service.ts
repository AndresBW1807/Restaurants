import {Campus} from "../Models/campus";


export class CampusService {
    async findAll(){
        const campus = Campus.findAll()
        return campus
    }
}