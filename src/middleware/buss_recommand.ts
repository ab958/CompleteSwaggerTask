import jwt from "jsonwebtoken";
import { BUSSSchema } from '../model/Buss.model';

export async function  buss_reccomand(req:any,res:any,next:any) {
    
   try{
        const participant_No = req.body.participant_No;
        const tripdate = req.body.tripDate 
        console.log(participant_No)
        const all_avaible_busses:any[] = await BUSSSchema.find({
            'BussBokingDates.startingDate' : { $lt : tripdate},
            'BussBokingDates.endingDate' : { $gt : tripdate}
        }).select('BussSeats')
        console.log(all_avaible_busses,"wahab")

        const allBusesSeat:any[] = await BUSSSchema.find().select('BussSeats')

         let seat:any[] = []

        for(let i=0;i<allBusesSeat.length;i++){
           seat.push(allBusesSeat[i].BussSeats)
            }

            let wahab = getAllSubsets(all_avaible_busses,participant_No)

            function getAllSubsets(array: number[], n: number) {
                const subsets:number[][] = [[]];
                for (const el of array) {
                let last = subsets.length-1;
                for (let i = 0; i <= last; i++) {​​​​​​
                    const array:any = [...subsets[i], el];
                    let sum = 0;
                    for (let i = 0; i < array.length; i++) {
                        sum += array[i]?.BussSeats;
                    }
                // console.log(sum,"sum")
                if(sum === n) {​​​​​​
                        console.log([array],"hlw")
                        res.locals.buss = array
                    return [array]
                }   else {
                        res.locals.buss = "No buss Availabe"
                    }​​​​​​
                            subsets.push( array );
                        }​​​​​​​​​​​​
                    }​​​​​​​​​​​​
                 
                return subsets;
                }​​​​​​​​​​​​
               
                next()
       
   }catch(e){
       next(e)
   }
  }