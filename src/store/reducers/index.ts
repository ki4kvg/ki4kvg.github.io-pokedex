import { combineReducers } from "redux";
// import pokemonReducer from "./pokemonReducer";
import {pokemonSlice} from "./pokemonSliceReducer";

const rootReducer = combineReducers({
    pokemon: pokemonSlice.reducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export default rootReducer