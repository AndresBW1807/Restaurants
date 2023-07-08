import express, {Application} from "express";
import db from "../Db/connection";
import userRoutes from "../Routes/users.routes";
import authRoutes from "../Routes/auth.routes";
import menuRolRoutes from "../Routes/menuRol.routes";
import rolRoutes from "../Routes/rol.routes";
import campusRoutes from "../Routes/campus.routes";
import courseRoutes from "../Routes/course.routes";
import campusCourseRoutes from "../Routes/campusCourse.routes";
import contractRoutes from "../Routes/contract.routes";
import contractServiceRoutes from "../Routes/contracService.routes";
import checkListRoutes from "../Routes/checkList.routes";
import cors from "cors"

export class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        atuh: "/api/auth",
        menuRol: "/api/rolMenu",
        rol: "/api/rol",
        campus: "/api/campus",
        course: "/api/course",
        campusCourse: '/api/campusCourse',
        contract: '/api/contract',
        contractService: '/api/contractService',
        checkList: '/api/checkList'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
        } catch (error) {
            console.log(error)
        }
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors())
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes);
        this.app.use(this.apiPaths.atuh, authRoutes);
        this.app.use(this.apiPaths.menuRol, menuRolRoutes);
        this.app.use(this.apiPaths.rol, rolRoutes);
        this.app.use(this.apiPaths.campus, campusRoutes);
        this.app.use(this.apiPaths.course, courseRoutes);
        this.app.use(this.apiPaths.campusCourse, campusCourseRoutes);
        this.app.use(this.apiPaths.contract, contractRoutes);
        this.app.use(this.apiPaths.contractService, contractServiceRoutes);
        this.app.use(this.apiPaths.checkList, checkListRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('hola')
        });
    }
}
