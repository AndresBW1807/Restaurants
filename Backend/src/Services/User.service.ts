import { UserDTO } from "../DTOs/User.Dto";
import { User } from "../Models/user";
import { campushascourses} from "../Models/campusCourses";
import {CheckList} from "../Models/checklist";
import {Op} from "sequelize";

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

  async getUsersAssistanceFalse(campusId: string, serviceId: string) {
    const users = await User.findAll({
      include: [
        {
          model: CheckList,
          required: false,
          where: {
            serviceId: serviceId,
          }
        },
        {
          model: campushascourses,
          where: { campusId },
          attributes: []// Filtra por el ID del campus específico
        }
      ],
      where: {
        '$checklists.id$': null
      }
    });
    return users;
  }

  async getUsersWithAttendance(campusId: string, serviceId: string) {
    const users = await User.findAll({
      include: [
        {
          model: CheckList,
          where: { userId: { [Op.not]: null }, serviceId: serviceId }, // Filtra los usuarios con registros de asistencia
          attributes: []
        },
        {
          model: campushascourses,
          where: { campusId },
          attributes: []// Filtra por el ID del campus específico
        }
      ]
    });

    return users;
  }
}
