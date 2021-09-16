import { IBUSS } from '../types/document/IBuss';
import { MainBuss } from '../repositories/Buss.repository';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResBUSS } from '../types/Responce/Buss.responce';
import { DeleteBUSS, GetBUSS, SaveReqBUSS,UpdateReqBUSS } from '../types/Request/Buss.request';
@Route('buss')
@Tags('Buss')
export class BussController {
  constructor() { }
  @Post("/getbuss")
  async getbuss(@Body() getreq:GetBUSS): Promise<SaveUpdateResBUSS> {
    const buss = <any> await new MainBuss().getBuss(getreq.id);
    if (!buss) throw new CustomeError(404, 'Buss not found');
    return <SaveUpdateResBUSS>buss;
  }
  @Post('/savebuss')
  async savebuss(@Body() buss: SaveReqBUSS): Promise<SaveUpdateResBUSS> {
    const new_buss = await new MainBuss().saveBuss(<IBUSS>(buss));
    return <SaveUpdateResBUSS>(new_buss);
  }
  @Put('/updatebuss')
  async updatebuss(@Body() buss: UpdateReqBUSS): Promise<SaveUpdateResBUSS> {
    const update_buss = <any> await new MainBuss().updateBuss(<IBUSS>(buss));
    if (update_buss === null)
      throw new CustomeError(400, 'Buss not updated');
    return <SaveUpdateResBUSS>update_buss;
  }
  @Delete('/deletebuss')
  @SuccessResponse("200","Buss deleted")
  async deletebuss(@Body() delreq: DeleteBUSS) {
    new MainBuss().deleteBuss(delreq.id);
  }

}