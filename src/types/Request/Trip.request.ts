export interface SaveReqTrip{
    Tripname: string;
    participant_No: number;
    tripDate : Date;
    busses : Array<string>
}

export interface GetTrip {
    id: string
  }