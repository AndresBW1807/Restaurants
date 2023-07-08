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
                attributes: ['nameUser', 'lastNameUser', 'id', 'idNumber']
            });
            return user;
        });
    }
    getUsersAssistanceFalse(campusId, serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.User.findAll({
                include: [
                    {
                        model: checklist_1.CheckList,
                        required: false,
                        where: {
                            serviceId: serviceId,
                        }
                    },
                    {
                        model: campusCourses_1.campushascourses,
                        where: { campusId },
                        attributes: [] // Filtra por el ID del campus específico
                    }
                ],
                where: {
                    '$checklists.id$': null
                }
            });
            return users;
        });
    }
    getUsersWithAttendance(campusId, serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.User.findAll({
                include: [
                    {
                        model: checklist_1.CheckList,
                        where: { userId: { [sequelize_1.Op.not]: null }, serviceId: serviceId },
                        attributes: []
                    },
                    {
                        model: campusCourses_1.campushascourses,
                        where: { campusId },
                        attributes: [] // Filtra por el ID del campus específico
                    }
                ]
            });
            return users;
        });
    }
}
exports.UserService = UserService;
