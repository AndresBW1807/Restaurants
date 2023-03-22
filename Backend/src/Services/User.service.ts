import { UserDTO } from "../DTOs/User.Dto";
import { User } from "../Models/user";
import * as bcryptjs from "bcryptjs"

export class UserService {
  async find() {
    const users = await User.findAll();
    /*const usersDTOs = users.map(
      (user) => new UserDTO(user.nameUser, user.lastNameUser, user.user)
    );*/
    return users
  }

  async findOne(id: any){
    const user = await User.findOne(id);
    const userDTO = new UserDTO(user.nameUser, user.lastNameUser, user.user)
    return userDTO
  }
}
