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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../Db/connection"));
const users_routes_1 = __importDefault(require("../Routes/users.routes"));
const auth_routes_1 = __importDefault(require("../Routes/auth.routes"));
const menuRol_routes_1 = __importDefault(require("../Routes/menuRol.routes"));
const rol_routes_1 = __importDefault(require("../Routes/rol.routes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
            atuh: "/api/auth",
            menuRol: "/api/rolMenu",
            rol: "/api/rol"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.apiPaths.users, users_routes_1.default);
        this.app.use(this.apiPaths.atuh, auth_routes_1.default);
        this.app.use(this.apiPaths.menuRol, menuRol_routes_1.default);
        this.app.use(this.apiPaths.rol, rol_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => { });
    }
}
exports.Server = Server;
