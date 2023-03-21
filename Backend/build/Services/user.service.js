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
class UserService {
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.User.findAll();
            const usersDTOs = users.map((user) => new User_Dto_1.UserDTO(user.nameUser, user.lastNameUser));
            return usersDTOs;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.User.create(data);
            return user;
        });
    }
}
exports.UserService = UserService;
