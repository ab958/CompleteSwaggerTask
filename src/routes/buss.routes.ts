import express from 'express';
import { BussController } from '../controller/Buss.controller';
// import { IBUSS } from '../types/document/IBuss';
import { DeleteBUSS, GetBUSS, SaveReqBUSS, UpdateReqBUSS } from '../types/Request/Buss.request';
import { SaveUpdateResBUSS } from '../types/Responce/Buss.responce';
// import CustomeError from '../utills/error';

export class BussRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {

    // get specfic buss 
    this.router.post('/getBuss', async (req, res, next) => {
      try {
        const getreq:GetBUSS = req.body;
          const buss:SaveUpdateResBUSS = await new BussController().getbuss(getreq);
          res.send(buss);
      } catch (error) {
        next(error);
      }
    });

    // save the new buss
    this.router.post('/savebuss', async (req, res, next) => {
      try {
        const buss: SaveReqBUSS = req.body;
        const new_buss:SaveUpdateResBUSS = await new BussController().savebuss(buss);
        res.status(200).json({
          message: new_buss
        });
      } catch (error) {
        next(error);
      }
    });

    // update the buss
    this.router.put('/updatebuss', async (req, res, next) => {
      try {
        const buss: UpdateReqBUSS = req.body;
        const upadated_buss:SaveUpdateResBUSS = await new BussController().updatebuss(buss);
        const response = {
            upadated_buss,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    // delete the buss
    this.router.delete('/deletebuss', async (req, res, next) => {
      try {
        const delreq:DeleteBUSS = req.body;
        const Deleted_Buss:any = await new BussController().deletebuss(delreq);
        res.status(200).json({
          message: 'Buss deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    
  }
}
export const BussRoutesApi = new BussRoutes().router;