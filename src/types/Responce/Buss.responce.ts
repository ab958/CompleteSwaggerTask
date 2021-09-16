export interface SaveUpdateResBUSS {
    _id:string;
    BussName: string;
    BussSeats: number;
    BussBokingDates:  {
      startingDate : Date,
      endingDate : Date
  };
    createdAt?: string;
    updatedAt?: string;
  }