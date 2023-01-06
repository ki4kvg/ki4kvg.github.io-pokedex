export const reducer = () => {

}
// import {
//     DELETE_POKEMON_SHORT_INFO,
//     DELETE_POKEMONS_BY_TYPES_LIST,
//     ERROR_POKEMON_SEARCH,
//     SET_POKEMON_INFO,
//     SET_POKEMON_SHORT_INFO,
//     SET_POKEMON_TYPES,
//     SET_POKEMONS_LIST_BY_TYPES,
// } from "../types";
// import {defaultStateType, pokemonType, TypesRequestType} from "../../types/tsTypes";
//
// const defaultState: defaultStateType = {
//     pokemon: null,
//     pokemonShortInfo: [],
//     pokemonTypes: [],
//     pokemonsByTypesList: [],
//     error: '',
//     isLoading: false
// };
//
// export default function pokemonReducer(state = defaultState, action: any): defaultStateType {
//     switch (action.type) {
//         case SET_POKEMON_INFO:
//             return {
//                 ...state,
//                 pokemon: action.payload,
//             }
//         case SET_POKEMON_SHORT_INFO:
//             if (!state.pokemonShortInfo.map((id: pokemonType) => id.id).includes(action.payload.id)) {
//                 return {
//                     ...state,
//                     pokemonShortInfo: [...state.pokemonShortInfo, action.payload],
//                 }
//             } else {
//                 return state;
//             }
//         case DELETE_POKEMON_SHORT_INFO: {
//             return {
//                 ...state,
//                 pokemonShortInfo: [],
//             }
//         }
//         case ERROR_POKEMON_SEARCH: {
//             return {
//                 ...state,
//                 error: action.payload,
//             }
//         }
//         case SET_POKEMON_TYPES: {
//             let array: Array<string> = [];
//             action.payload.map((t: TypesRequestType) => {
//                 return array = [...array, t.name];
//             })
//             return {
//                 ...state,
//                 pokemonTypes: array,
//             }
//         }
//         case SET_POKEMONS_LIST_BY_TYPES:
//             return {
//                 ...state,
//                 pokemonsByTypesList: Array.from([new Set([...state.pokemonsByTypesList, ...action.payload])] as unknown as string),
//                 // pokemonsByTypesList: [...new Set([...state.pokemonsByTypesList, ...action.payload])],
//             }
//         case DELETE_POKEMONS_BY_TYPES_LIST:
//             return {
//                 ...state,
//                 pokemonsByTypesList: [],
//             };
//         default:
//             return state;
//     }
// }