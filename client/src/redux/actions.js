import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRYNAME = "GET_COUNTRYNAME"



const endpoint = "http://localhost:3001";

export const getCountries = () =>{
    return async function (dispatch){
        const response = (await axios.get(`${endpoint}/countries`)).data
        dispatch({type:GET_COUNTRIES, payload:response})
    }
}

export const getCountrybyName=(name)=>{
    return async (dispatch)=> {
        try {
            const response = await axios.get(`${endpoint}/countries/search?name=${name}`);
            const ctry = response.data;
    
            return dispatch({type: GET_COUNTRYNAME, payload: ctry})
            
        } catch (error) {
            window.alert('¡Pais no encontrado!');
        }
       

    }
}
