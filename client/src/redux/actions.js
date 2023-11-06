import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRYNAME = "GET_COUNTRYNAME"
export const ORDER = "ORDER"
export const FILT_CONTINENTE = "FILT_CONTINENTE"
export const FILT_ACT = "FILT_ACT"
export const GET_ACT = "GET_ACT"



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

export const OrderCountries = (order)=>{
    return  (disptach)=> {
        return disptach({
            type: ORDER,
            payload: order
        })

    }
}

export const FiltContinents = (cont)=> {
    console.log(cont)
    return (dispatch)=> {
        return dispatch({
            type: FILT_CONTINENTE,
            payload: cont

        })
    }
}

export const FiltActivity = (act)=>{
    return (dispatch)=>{
        return dispatch({
            type: FILT_ACT,
            payload: act
        })
    }
}

export const GetActivity = ()=>{
    return async (dispatch)=>{
        const res = (await axios.get(`${endpoint}/activity`)).data;
        return dispatch({
            type: GET_ACT,
            payload: res
        })
    }
}