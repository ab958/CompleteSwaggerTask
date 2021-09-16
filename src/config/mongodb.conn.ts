import { connect, connection } from 'mongoose';
export class DbMongo {
  constructor() {
  }
  connect(h: string, dbName: string, u?: string, pass?: string, p?: number) {
    let connectionuri = `mongodb+srv://wahab:Ahhad123@cluster0.gnqnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    // if (u != undefined && pass != undefined) {
    //   connectionuri = `mongodb+srv://${u}:${pass}@${h}/${dbName}`;
    // }
    connect(connectionuri, (err: any) => {
      if (err) {
        console.log(err);
        console.log('DataBase Connection Falied');
      } else {
        console.log('connected with database');
      }
    });
  }
}
export const MonStatConnection = connection.readyState;