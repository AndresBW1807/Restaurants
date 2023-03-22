import {Request, Response} from "express";
import jwt from "jsonwebtoken"


export const validationJwt = (req: Request, res: Response, next: any) => {
    const token = req.header("Authorization")
    if(!token){
        return res.status(401).json({
            msg: "No hay token"
        })
    }
    try {
        jwt.verify(token, "R3ZT4UR4TZ")
        next();
    } catch (e) {
        return res.status(401).json({
            msg: "Token no valido"
        })
    }
}