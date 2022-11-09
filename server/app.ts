require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
import express from "express";
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
var cors = require('cors');
import router from "./routes";
import authRoutes from "./routes/auth.routes";
import path from 'path'
import * as MySQLConnector from "./database/mysql.connector";
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/error-handler.middleware'
const PORT = process.env.PORT;

export class Application {
    app: express.Application;
    constructor() {
        console.log(`.env.${process.env.NODE_ENV}`)
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        // create database pool
        MySQLConnector.init();
    }

    settings() {
        console.log(path.join(__dirname, '../frontend/dist'))
        this.app.use(express.static(path.join(__dirname, '../frontend/dist')))
    }

    middlewares() {
        this.app.use(logger);
        this.app.use(cors());
        this.app.use(compression())
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/", router)
        this.app.use("/auth/", authRoutes)
        // add custom error handler middleware as the last middleware
        this.app.use(errorHandler);
    }

    start(): void {
        this.app.listen(PORT, () => {
            console.log("Server is running at", PORT);
        });
    }
}
