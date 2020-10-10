
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
    }
}