import { ITRIP } from '../types/document/ITrip';
import { MainTrip } from '../repositories/Trip.repository';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { SaveUpdateResTRIP } from '../types/Responce/Trip.responce';
import {  SaveReqTrip,GetTrip } from '../types/Request/Trip.request';
@Route('trip')
@Tags('Trip')
export class TripController {
  constructor() { }
  
  /**
   * @summary Busses will automatically add through middle ware
   */
  @Post('/savetrip')
  async saveTrip(@Body() trip: SaveReqTrip): Promise<SaveUpdateResTRIP> {
    const new_trip:ITRIP = await new MainTrip().saveTrip(<ITRIP>(trip));
    return <SaveUpdateResTRIP>(new_trip);
  }

}