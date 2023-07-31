import {UserDTO} from "../DTOs/User.Dto";
import {User} from "../Models/user";
import {campushascourses} from "../Models/campusCourses";
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
        const user = await User.findAll({
            include: [{
                model: campushascourses,
                where: {campusId},
                attributes: []
            }],
            attributes: ['nameUser', 'lastNameUser', 'id', 'idNumber']
        })
        return user
    }

    async getUsersAssistanceFalse(campusId: string, serviceId: string) {
        let day = new Date();
        const startOfDay = new Date(day);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(day);
        endOfDay.setHours(23, 59, 59, 999);
        const users = await User.findAll({
            include: [
                {
                    model: CheckList,
                    required: false,
                    where: {
                        serviceId: serviceId,
                        createdAt: {
                            [Op.between]: [startOfDay, endOfDay],
                        }
                    }
                },
                {
                    model: campushascourses,
                    where: {campusId},
                    attributes: []// Filtra por el ID del campus específico
                }
            ],
            where: {
                '$checklists.id$': null,
                RolId: 3
            }
        });
        return users;
    }


    async getUsersWithAttendance(campusId: string, serviceId: string) {
        let day = new Date();
        const startOfDay = new Date(day);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(day);
        endOfDay.setHours(23, 59, 59, 999);
        const users = await User.findAll({
            include: [
                {
                    model: CheckList,
                    where: {
                        userId: {[Op.not]: null},
                        serviceId: serviceId,
                        assistance: true,
                        createdAt: {
                            [Op.between]: [startOfDay, endOfDay],
                        }
                    }, // Filtra los usuarios con registros de asistencia
                    attributes: []
                },
                {
                    model: campushascourses,
                    where: {campusId},
                    attributes: []// Filtra por el ID del campus específico
                }
            ],
            where: {
                RolId: 3
            }
        });

        return users;
    }

    async postUsersAssistanceFalse(campusId: string, serviceId: string) {

        let day = new Date();
        const startOfDay = new Date(day);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(day);
        endOfDay.setHours(23, 59, 59, 999);
        const users = await User.findAll({
            include: [
                {
                    model: CheckList,
                    required: false,
                    where: {
                        serviceId: serviceId,
                        createdAt: {
                            [Op.between]: [startOfDay, endOfDay],
                        }
                    }
                },
                {
                    model: campushascourses,
                    where: {campusId},
                    attributes: []// Filtra por el ID del campus específico
                }
            ],
            where: {
                '$checklists.id$': null,
                RolId: 3,
            }
        });

        const usuariosSinAsistencia = users.map(x => x.id)
        try {

            // Crea los registros de inasistencia para los usuarios que aún no tienen registro
            const registrosInasistencia = usuariosSinAsistencia.map((userId) => ({
                assistance: false,
                date: new Date(),
                serviceId: serviceId,
                userId: userId,
            }));

            // Inserta los registros de inasistencia en la base de datos
            await CheckList.bulkCreate(registrosInasistencia);

            return registrosInasistencia; // Opcionalmente, puedes devolver los registros creados
        } catch (error) {
            console.error('Error al registrar inasistencia:', error);
            throw new Error('Error en el servidor');
        }
    }


}
