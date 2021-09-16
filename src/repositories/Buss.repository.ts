import { BUSSSchema } from '../model/Buss.model';
import { IBUSS } from '../types/document/IBuss';
export class MainBuss {
  constructor() {}
  getBuss(_id: string) {
    return BUSSSchema.findById(_id);
  }
  saveBuss(newBuss: IBUSS) {
    return new BUSSSchema(newBuss).save();
  }
  updateBuss(updateBuss: IBUSS) {
    return BUSSSchema.findByIdAndUpdate(updateBuss._id, updateBuss, {
      new: true
    });
  }
  deleteBuss(_id: string) {
    return BUSSSchema.findByIdAndDelete(_id);
  }
  
}