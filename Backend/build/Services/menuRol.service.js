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
exports.MenuRolService = void 0;
const menu_1 = require("../Models/menu");
const menuRol_1 = require("../Models/menuRol");
const submenu_1 = require("../Models/submenu");
class MenuRolService {
    findAllMenuRol(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const menuRol = menuRol_1.MenuRol.findAll({
                where: { roleId },
                include: [
                    {
                        model: menu_1.Menu,
                        attributes: ["nameMenu", "iconMenu"],
                    },
                ],
            });
            return menuRol;
        });
    }
    findAllSubMenu(menuId) {
        return __awaiter(this, void 0, void 0, function* () {
            const submenus = submenu_1.SubMenu.findAll({ where: { menuId } });
            return submenus;
        });
    }
}
exports.MenuRolService = MenuRolService;
