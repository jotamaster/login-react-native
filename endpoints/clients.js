
import { BASE_URL_API } from "@env"


export default {
    getClients : async (token) => {

       let response = await fetch(
           `${BASE_URL_API}clients`,
           {
            method:'GET',
            headers:{
                'Authorization': 'Bearer ' + token,
            }
        })
        
        return response.json()
    },
    setClient: async (token,params) => {

        let response = await fetch(
            `${BASE_URL_API}clients`,
            {
             method:'POST',
             body:JSON.stringify(params),
             headers:{
                 'Authorization': 'Bearer ' + token,
                 'Content-Type': 'application/json'
             }
         })
         
         return response.json()
    }
}