
import { BASE_URL_API } from "@env"


export default {
    signin : async (params) => {

       let response = await fetch(
           `${BASE_URL_API}auth/login`,
           {
            method:'POST',
            body:JSON.stringify(params),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        return response.json()
    }
}