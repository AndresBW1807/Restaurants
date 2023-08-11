"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_Dto_1 = require("../DTOs/User.Dto");
const user_1 = require("../Models/user");
const campusCourses_1 = require("../Models/campusCourses");
const checklist_1 = require("../Models/checklist");
const sequelize_1 = require("sequelize");
class UserService {
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.User.findAll();
            return users;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.User.findOne(id);
            const userDTO = new User_Dto_1.UserDTO(user.nameUser, user.lastNameUser, user.user);
            return userDTO;
        });
    }
    getUsersByCampus(campusId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.User.findAll({
                include: [{
                        model: campusCourses_1.campushascourses,
                        where: { campusId },
                        attributes: []
                    }],
            });
            return user;
        });
    }
    getUsersAssistanceFalse(campusId, serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            let day = new Date();
            const startOfDay = new Date(day);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(day);
            endOfDay.setHours(23, 59, 59, 999);
            const users = yield user_1.User.findAll({
                include: [
                    {
                        model: checklist_1.CheckList,
                        required: false,
                        where: {
                            serviceId: serviceId,
                            createdAt: {
                                [sequelize_1.Op.between]: [startOfDay, endOfDay],
                            }
                        }
                    },
                    {
                        model: campusCourses_1.campushascourses,
                        where: { campusId },
                        attributes: [] // Filtra por el ID del campus específico
                    }
                ],
                where: {
                    '$checklists.id$': null,
                    RolId: 3,
                    activated: true
                }
            });
            return users;
        });
    }
    getUsersWithAttendance(campusId, serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            let day = new Date();
            const startOfDay = new Date(day);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(day);
            endOfDay.setHours(23, 59, 59, 999);
            const users = yield user_1.User.findAll({
                include: [
                    {
                        model: checklist_1.CheckList,
                        where: {
                            userId: { [sequelize_1.Op.not]: null },
                            serviceId: serviceId,
                            assistance: true,
                            createdAt: {
                                [sequelize_1.Op.between]: [startOfDay, endOfDay],
                            }
                        },
                        attributes: []
                    },
                    {
                        model: campusCourses_1.campushascourses,
                        where: { campusId },
                        attributes: [] // Filtra por el ID del campus específico
                    }
                ],
                where: {
                    RolId: 3,
                    activated: true
                }
            });
            return users;
        });
    }
    postUsersAssistanceFalse(campusId, serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            let day = new Date();
            const startOfDay = new Date(day);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(day);
            endOfDay.setHours(23, 59, 59, 999);
            const users = yield user_1.User.findAll({
                include: [
                    {
                        model: checklist_1.CheckList,
                        required: false,
                        where: {
                            serviceId: serviceId,
                            createdAt: {
                                [sequelize_1.Op.between]: [startOfDay, endOfDay],
                            }
                        }
                    },
                    {
                        model: campusCourses_1.campushascourses,
                        where: { campusId },
                        attributes: [] // Filtra por el ID del campus específico
                    }
                ],
                where: {
                    '$checklists.id$': null,
                    RolId: 3,
                    activated: true
                }
            });
            const usuariosSinAsistencia = users.map(x => x.id);
            try {
                // Crea los registros de inasistencia para los usuarios que aún no tienen registro
                const registrosInasistencia = usuariosSinAsistencia.map((userId) => ({
                    assistance: false,
                    date: new Date(),
                    serviceId: serviceId,
                    userId: userId,
                }));
                // Inserta los registros de inasistencia en la base de datos
                yield checklist_1.CheckList.bulkCreate(registrosInasistencia);
                return registrosInasistencia; // Opcionalmente, puedes devolver los registros creados
            }
            catch (error) {
                console.error('Error al registrar inasistencia:', error);
                throw new Error('Error en el servidor');
            }
        });
    }
}
exports.UserService = UserService;
