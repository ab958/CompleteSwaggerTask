import express from 'express';
import { BussRoutesApi } from "./buss.routes";
import { TripRoutesApi } from "./trip.routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/buss',BussRoutesApi);
        this.router.use('/trip',TripRoutesApi);

    }


}
export const MainApi = new MainRouter().router;