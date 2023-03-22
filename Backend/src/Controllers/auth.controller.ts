import { Request, Response } from "express";
import {User} from "../Models/user";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response, next: any) => {
    const { user, password } = req.body;

    // Verificar si el usuario existe
    const userVer = await User.findOne({ where: {user} });

    // Verificar Usuario
    if (!userVer) {
        return res.status(400).json({
            msg: "El usuario es incorrectos",
        });
    }

    //Verificar Contraseña
    const userPass = bcryptjs.compareSync(password, userVer.password);
    console.log(userPass)
    if(!userPass){
        return res.status(400).json({
            msg: "La contraseña es incorrecta",
        });
    }
    //Payload
    const payload = {
        nameUser : userVer.nameUser,
        lastNameUser: userVer.lastNameUser,
        user: userVer.user,
        idRol: userVer.idRol
    }

    //Crear Token payload
    const token = jwt.sign(payload, "R3ZT4UR4TZ", {
        expiresIn: "24h",
    });

    // Return Token in Response
    res.json({
        token,
    });

};