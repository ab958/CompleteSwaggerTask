import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import {MainApi} from "./routes";
import { DbMongo } from "./config/mongodb.conn";
import { Server } from "http";
const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();
import { dbHost,dbUser,dbPassword,dbName } from "./utills/constant";
let server: Server | null = null;
const PORT = process.env.PORT || 5000;
function initApplication(): express.Application {
    new DbMongo().connect(dbHost,dbName,dbUser,dbPassword);
    const app = express();
    app.use(express.json());
    app.use(morgan("tiny"));
    app.use(express.static("public"));
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        }
    }));
    app.use(cors());

    // For Parsing Request Data
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(MainApi);
    app.use(
        (err: any, req: Request, res: Response, next: NextFunction) => {
            res.locals.message = err.message;
            const status = err.statusCode || 500;
            res.locals.status = status;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(status);
            return res.json({
                error: {
                    message: err.message
                }
            });
        }
    );
    app.use('/health', health.LivenessEndpoint(healthcheck))
    app.use('/ready', health.ReadinessEndpoint(healthcheck));
    return app;
}
function start() {
    const app = initApplication();
    // const PORT = process.env.PORT || 4000
    const HOST = process.env.HOST || 'localhost'
  
   

    server = app.listen(process.env.PORT || PORT, () => {
        console.log(`Server Is Live On http://${HOST}:${PORT}/api-docs`);
    });
}
// Start the application
start();