import { UserDTO } from "../DTOs/User.Dto";
import { User } from "../Models/user";


export class UserService {
    async find (){
        const users = await User.findAll()
        const userDTOs = users.map((user) => new UserDTO(user.nameUser, user.lastNameUser))
        return userDTOs
    }

    async create(data: any){
        const newUser = await User.create(data)
        return newUser
    }
}