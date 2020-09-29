import {auth} from '../endpoints/index'


export const login = async (email,password ) => { 
    try {
      let payload = {
        email,
        password
      }
      let response = await auth.login(payload)
      if (response.message) return false  

      return ({
        username:'juanito',
        token:response.access_token
      })

    } catch (error) {
      console.error(error);
    }
        
};