import { Rol } from "../Models/rol";

export class RolService {
    async findAll(){
        const roles = Rol.findAll()
        return roles
    }
}