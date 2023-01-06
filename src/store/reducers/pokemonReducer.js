// import {
//     DELETE_POKEMON_SHORT_INFO,
//     DELETE_POKEMONS_BY_TYPES_LIST,
//     ERROR_POKEMON_SEARCH,
//     SET_POKEMON_INFO,
//     SET_POKEMON_SHORT_INFO,
//     SET_POKEMON_TYPES,
//     SET_POKEMONS_LIST_BY_TYPES,
// } from "../types";
//
//
// const initialState = {
//     pokemon: null,
//     pokemonShortInfo: [],
//     pokemonTypes: [],
//     pokemonsByTypesList: [],
//     error: null
// };
//
// export default function pokemonReducer(state = initialState, action) {
//     switch (action.type) {
//         case SET_POKEMON_INFO:
//             return {
//                 ...state,
//                 pokemon: action.payload,
//             }
//         case SET_POKEMON_SHORT_INFO:
//             if (!state.pokemonShortInfo.map(id => id.id).includes(action.payload.id)) {
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
//             let array = [];
//             action.payload.map(t => {
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
//                 pokemonsByTypesList: [...new Set([...state.pokemonsByTypesList, ...action.payload])],
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