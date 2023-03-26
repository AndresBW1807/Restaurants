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
exports.getSubMenu = exports.getMenuRol = void 0;
const menuRol_service_1 = require("../Services/menuRol.service");
const menuRol = new menuRol_service_1.MenuRolService();
const getMenuRol = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const roleId = req.params.roleId;
    try {
        const menusRol = yield menuRol.findAllMenuRol(roleId);
        res.json(menusRol);
    }
    catch (error) {
        next(error);
    }
});
exports.getMenuRol = getMenuRol;
const getSubMenu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const menuId = req.params.menuId;
    try {
        const submenus = yield menuRol.findAllSubMenu(menuId);
        res.json(submenus);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getSubMenu = getSubMenu;
