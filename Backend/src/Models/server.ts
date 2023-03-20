import express, { Application } from "express";
import db from "../Db/connection";
import route from "../Routes/users.routes";
import cors from "cors"

export class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
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
    this.app.use(this.apiPaths.users, route);
  }

  listen() {
    this.app.listen(this.port, () => {});
  }
}
