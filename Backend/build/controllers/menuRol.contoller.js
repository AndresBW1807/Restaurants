"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuRol = void 0;
const menuRols_service_1 = require("../Services/menuRols.service");
const menuRol = new menuRols_service_1.MenuRoleService();
const getMenuRol = (req, res, next) => {
    const { body } = req;
    const menus = menuRol.getMenuRol(body);
    res.json(menus);
};
exports.getMenuRol = getMenuRol;
