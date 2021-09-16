export interface SaveUpdateResTRIP {
    _id:string;
    Tripname: string;
    participant_No: number;
    tripDate : Date;
    busses : Array<string>
    CreatedAt?: string;
    UpdatedAt?: string;
  }
  