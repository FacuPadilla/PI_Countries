import { GET_COUNTRIES, GET_COUNTRYNAME, ORDER, FILT_CONTINENTE, FILT_ACT, GET_ACT} from "./actions"

let initialState = {allCountries: [], countriesCopy:[], countryFilter:[], AllActs:[]}

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

   case FILT_CONTINENTE:
    const copia = [...state.countriesCopy]
    if (action.payload === "all") {
        return { ...state, allCountries: copia };
      } else {
         const filtercountrys = copia.filter((country) => country.continente.includes(action.payload));
        console.log(filtercountrys)
        return { ...state, allCountries: filtercountrys };
      }

      case FILT_ACT:
        const copiass = [...state.countriesCopy];
  if (action.payload === "all") {
    return { ...state, allCountries: copiass };
  } else {
    const filtActs = copiass.filter((country) => {
      return country.Activities.some(activity => activity.name === action.payload);
    });
    console.log(filtActs);
    return { ...state, allCountries: filtActs };
  }
        case GET_ACT:
          return {...state, AllActs: action.payload}

        default: 
        return state
}
}
export default rootReducer