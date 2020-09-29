
let baseUrl = 'http://jeanhernandezo.cl:3800/api/'

export default {
    login : async (params) => {

       let response = await fetch(
           `${baseUrl}auth/login`,
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