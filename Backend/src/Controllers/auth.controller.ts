import { Request, Response } from "express";
import { User } from "../Models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {campushascourses} from "../Models/campusCourses";

export const login = async (req: Request, res: Response, next: any) => {
  const { user, password } = req.body;

  try {
    // Verificar si el usuario existe
    const userVer = await User.findOne({
      where: { user },
      include: [
        {
          model: campushascourses,
          attributes: ['campusId'],
        },
      ],
    });

    // Verificar Usuario
    if (!userVer) {
      return res.status(400).json({
        msg: 'El usuario es incorrecto',
      });
    }

    // Verificar Contraseña
    const userPass = bcryptjs.compareSync(password, userVer.password);
    if (!userPass) {
      return res.status(400).json({
        msg: 'La contraseña es incorrecta',
      });
    }

    // Obtener el campus del usuario
    const campus = userVer.campushascourse.campusId

    // Crear el payload con el campus incluido
    const payload = {
      nameUser: userVer.nameUser,
      lastNameUser: userVer.lastNameUser,
      user: userVer.user,
      RolId: userVer.RolId,
      campus, // Incluimos el campus en el payload
    };

    // Crear el token payload
    const token = jwt.sign(payload, 'R3ZT4UR4TZ', {
      expiresIn: '24h',
    });

    // Retornar el token en la respuesta
    res.json({
      token,
    });
  } catch (error) {
    // Manejo de errores
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({
      msg: 'Error en el servidor',
    });
  }
};
