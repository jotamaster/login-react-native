import endpoints from '../endpoints/index';


export const login = async (email,password ) => { 
    try {
      let payload = {
        email,
        password
      }
      let response = await endpoints.signin(payload)
      if (response.message) return false  
      return ({
        username:response.username,
        token:response.access_token
        
      })

    } catch (error) {
      console.error(error);
    }
        
};