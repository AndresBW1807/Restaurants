import express, { Application } from "express";
import db from "../Db/connection";
import userRoutes from "../Routes/users.routes";
import authRoutes from "../Routes/auth.routes";
import rolMenuRoutes from "../Routes/rolMenu.routes"
import cors from "cors"

export class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users',
    atuh: "/api/auth",
    menu: "/api/rolMenu"
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

  middlewares(){
    this.app.use(express.json());
    this.app.use(cors())
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
    this.app.use(this.apiPaths.atuh, authRoutes);
    this.app.use(this.apiPaths.menu, rolMenuRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {});
  }
}
