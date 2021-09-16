import jwt from "jsonwebtoken";
import { BUSSSchema } from '../model/Buss.model';

export async function  buss_reccomand(req:any,res:any,next:any) {
    
   try{
       //  getting date and seats from request body to validte Date 
    //    and choose the best match for seats
        const participant_No = req.body.participant_No;
        const tripdate = req.body.tripDate 

    //  get all the buses from from date that are avalible on trip date
        const all_avaible_busses:any[] = await BUSSSchema.find({
            'BussBokingDates.startingDate' : { $lt : tripdate},
            'BussBokingDates.endingDate' : { $gt : tripdate}
        }).select('BussSeats')

      
         let allSum:any[] = [] 

    //  Apply algorithm to find best match
            let wahab = getAllSubsets(all_avaible_busses,participant_No)
            function getAllSubsets(array: number[], n: number) {
                const subsets:number[][] = [[]];
                for (const el of array) {
                let last = subsets.length-1;
                for (let i = 0; i <= last; i++) 
                    {​​​​​​
                        const array:any = [...subsets[i], el];
                        let sum = 0;
                            for (let i = 0; i < array.length; i++) {
                                sum += array[i]?.BussSeats;
                            }
                        const wahab ={
                            sum : sum,
                            array : array
                        }
                        allSum.push(wahab)
                       
                        if(sum === n) 
                        {​​​​​​
                            res.locals.buss = array
                            return [array]
                        }   
                        else {
                            let checker :any[] =[]
                            for(let i=0;i<allSum.length;i++)
                            {
                                const checkPoint ={
                                    index : allSum[i].sum,
                                    diff : (allSum[i].sum - n )
                                }
                                checker.push(checkPoint)
                            }
    
                    let smallest =100
                    interface viki{
                        index :any,
                        diff:any
                    }
                    let smallval : viki = {
                        index : 0,
                        diff : 0
                    }
                    
                    for(let i=0;i<checker.length;i++){
                        if(checker[i].diff >= 0){
                            
                            if(checker[i].diff >= 0){
                                
                                if( checker[i].diff < smallest){
                                    smallest = checker[i].diff
                                    smallval = checker[i]
                                }
                            }
                           
                        }
                        else{
    
                        }
                    }
                    let { index } = smallval
                    for(let i=0;i<allSum.length;i++){
                        if(index === allSum[i].sum){
                            index = allSum[i]
                        }
                    }
                            res.locals.buss = index.array
                        }​​​​​​
                            subsets.push( array );
                    }
                    
                    ​​​​​​​​​​​​
                }
              
            return subsets;
        }​​​​​​​​​​​​
               
    next()
}catch(e){
       next(e)
   }
  }