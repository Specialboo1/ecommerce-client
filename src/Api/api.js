import axios from 'axios';

const url = `http://localhost:8000`


export const authenticateSignup = async (user) => {

        try {
            console.log(user)
            return await axios.post(`${url}/signup`, user)
        } catch (error) {
            console.log('error in post api', error);
        }
   
}

export const aunthenticateLogin = async (user) => {

    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        
        console.log('error in login api', error)
    }

}

export const payUsingPaytm = async (data) => {

    try {
        let response = await axios.post(`${url}/payment`, data)
        return response.data
    } catch (error) {
        
        console.log('error in payment api', error)
    }

}