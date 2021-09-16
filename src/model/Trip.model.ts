import mongoose,{ Schema, model } from 'mongoose';
import { ITRIP } from '../types/document/ITrip';
const ITRIPSchema = new Schema(
  {
    Tripname: { type: String },
    participant_No: { type: Number },
    tripDate : {
      type : Date
    },
    busses :[ {
        type: String  || mongoose.Schema.Types.ObjectId,
        ref: "IBUSSSchema",
    }],
   
    
  },
  { timestamps: true }
);
export const TRIPSchema = model<ITRIP>('ITRIPSchema', ITRIPSchema);