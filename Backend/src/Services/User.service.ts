import { UserDTO } from "../DTOs/User.Dto";
import { User } from "../Models/user";

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
    return user
  }
}
