import {Request, Response} from "express";
import {UserService} from "../Services/User.service";
import {User} from "../Models/user";
import * as bcryptjs from "bcryptjs";
import {Op} from "sequelize";


const userService = new UserService();

export const getUsuarios = async (req: Request, res: Response, next: any) => {
    try {
        const users = await userService.find()
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const getUsuariosUnassistance = async (req: Request, res: Response, next: any) => {
    const campusId = req.params.campusId;
    const serviceId = req.params.serviceId
    try {
        const users = await userService.getUsersAssistanceFalse(campusId, serviceId)
        res.json(users);
    } catch (error) {
        next(error);
        console.log(error)
    }
};

export const getUsersWithAttendance = async (req: Request, res: Response, next: any) => {
    const campusId = req.params.campusId;
    const serviceId = req.params.serviceId;
    try {
        const users = await userService.getUsersWithAttendance(campusId, serviceId)
        res.json(users);
    } catch (error) {
        next(error);
    }
};

export const postUsuariosUnassistance = async (req: Request, res: Response, next: any) => {
    const campusId = req.params.campusId;
    const serviceId = req.params.serviceId;
    try {
        const users = await userService.postUsersAssistanceFalse(campusId, serviceId)
        res.json(users);
    } catch (error) {
        next(error);
    }
}


export const postUsuario = async (req: Request, res: Response, next: any) => {
    const {body} = req;
    try {
        const count = await User.count({
            where: {
                idNumber: body.idNumber,
                RolId: {[Op.eq]: body.RolId}, // Excluir el rol actual
            },
        });
        console.log(count)
        if (count > 0) {
            throw new Error('No se pueden tener cédulas iguales con roles diferentes');
        } else {
            const user = await User.create(body);
            const saltRounds = 10; // Número de rondas de encriptación
            const hashedPassword = bcryptjs.hashSync(body.password, saltRounds);
            user.set('password', hashedPassword); // Guardar la contraseña encriptada en el modelo User
            await user.save(); // Guardar el usuario en la base de datos
            res.json(user);
        }
    } catch (error) {
        next(error);
        console.log(error)
    }
};

export const getUserbyCampus = async (req: Request, res: Response, next: any) => {
    const campusId = req.params.campusId;
    try {
        const users = await userService.getUsersByCampus(campusId)
        res.json(users);
    } catch (error) {
        next(error);
    }
}
