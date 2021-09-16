export interface SaveReqBUSS{
  BussName: string;
  BussSeats: number;
  BussBokingDates:  {
    startingDate : Date,
    endingDate : Date
};
    
  }
  export interface UpdateReqBUSS {
    _id: string;
    BussName: string;
    BussSeats: number;
    BussBokingDates:  {
      startingDate : Date,
      endingDate : Date
  };
    
  }
  export interface GetBUSS {
    id: string
  }
  export interface DeleteBUSS {
    id: string
  }