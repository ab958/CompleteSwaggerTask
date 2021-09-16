import { Document } from 'mongoose';
export interface ITRIP extends Document {
  _id:string;
  Tripname: string;
  participant_No: number;
  tripDate : Date;
  busses : Array<string>;
  CreatedAt?: string;
  UpdatedAt?: string;
}
