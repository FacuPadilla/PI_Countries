import { GET_COUNTRIES, GET_COUNTRYNAME} from "./actions"

let initialState = {allCountries: [], countriesCopy:[]}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload,
                countriesCopy: action.payload
            }
            case GET_COUNTRYNAME:
                return{...state, allCountries:action.payload}



        default: 
        return {...state}
    }
}

export default rootReducer