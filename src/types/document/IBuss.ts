import { Document } from 'mongoose';

export interface IBUSS extends Document {
  _id:string;
  BussName: string;
  BussSeats: number;
  BussBokingDates: {
    startingDate : Date,
    endingDate : Date
  };
  CreatedAt?: string;
  UpdatedAt?: string;
}