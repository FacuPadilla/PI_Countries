import { GET_COUNTRIES, GET_COUNTRYNAME, ORDER} from "./actions"

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

                case ORDER: 
                const copy = [...state.countriesCopy];

          if (action.payload === "A") {
    // Orden alfabético de A a Z
         copy.sort((a, b) => (a.name > b.name ? 1 : -1));
         } else if (action.payload === "B") {
    // Orden alfabético de Z a A
          copy.sort((a, b) => (b.name > a.name ? 1 : -1));
         } else if (action.payload === "C") {
   // Ordenar por cantidad de población de mayor a menor
       copy.sort((a, b) => b.poblacion - a.poblacion);
       } else if (action.payload === "D") {
  // Ordenar por cantidad de población de menor a mayor
          copy.sort((a, b) => a.poblacion - b.poblacion);
     }
     return { ...state, allCountries: copy };



        default: 
        return {...state}
    }
}

export default rootReducer