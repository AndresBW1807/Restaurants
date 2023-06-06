import { UserDTO } from "../DTOs/User.Dto";
import { User } from "../Models/user";
import { campushascourses} from "../Models/campusCourses";

export class UserService {
  async find() {
    const users = await User.findAll();
    return users;
  }

  async findOne(id: any) {
    const user = await User.findOne(id);
    const userDTO = new UserDTO(user.nameUser, user.lastNameUser, user.user);
    return userDTO;
  }

  async getUsersByCampus(campusId: string) {
    const user = await  User.findAll({
      include: [{
        model: campushascourses,
        where: { campusId },
        attributes: []
      }],
      attributes: ['nameUser', 'lastNameUser', 'id','idNumber']
    })
    return user
  }
}
