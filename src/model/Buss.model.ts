import { Schema, model } from 'mongoose';
import { IBUSS } from '../types/document/IBuss';
const IBUSSSchema = new Schema(
  {
    BussName: { type: String },
    BussSeats: { type: Number },
    BussBokingDates: { 
      startingDate : { type : Date},
      endingDate : { type : Date },
     },
    
  },
  { timestamps: true }
);
export const BUSSSchema = model<IBUSS>('IBUSSSchema', IBUSSSchema);