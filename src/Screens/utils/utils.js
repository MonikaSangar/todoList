import axios from "axios";

export async function apiReq(
    endPoint,
    method
   
){
    return new Promise(function(resolve,reject){

        axios[method](endPoint)
        .then(result=>{
            console.log("my result",result)
            const {data}=result //destructuring
            if (data.status == false)
            {
                return reject(data)
            }
            return resolve(data)
        })
        .catch(error=>{

   console.log(error)
   console.log(error && error.response,'the error response')
   if(error && error.response && error.response.status ===401){

   }
         if(error && error.response && error.response.data){
            if(!error.response.data.message){
                return reject ({...error.response.data,msg:error.response.data.message || "Metwrok error"})

            }
            return reject(error.response.data)
         } else{
            return reject({message :"Network error",msg:"Network Error"})
         }

        })
        
    })
}


export function apiGet(endPoint){
    return apiReq(endPoint,'get ')
}