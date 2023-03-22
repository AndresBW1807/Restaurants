import { UserDTO } from "../DTOs/User.Dto";
import { User } from "../Models/user";
import * as bcryptjs from "bcryptjs"

export class UserService {
  async find() {
    const users = await User.findAll();
    const usersDTOs = users.map(
      (user) => new UserDTO(user.nameUser, user.lastNameUser)
    );
    return usersDTOs
  }

  async create(data: any){
    const user = await User.create(data)
    //Numero de vueltas de encriptado
    const salt = bcryptjs.genSaltSync();
    //Encriptado
    user.dataValues.password = bcryptjs.hashSync(data.password, salt)
    return user
  }
}
