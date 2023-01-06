import {defaultStateType} from "../../types/tsTypes";
import {createSlice} from "@reduxjs/toolkit";
import {
    getPokemonByTypeAction,
    getPokemonInfoAction,
    getPokemonShortInfoAction,
    setPokemonTypesAction
} from "../actions/pokemonActions";

const initialState: defaultStateType = {
    pokemon: null,
    pokemonShortInfo: [],
    pokemonTypes: [],
    pokemonsByTypesList: [],
    error: '',
    isLoading: false,
    isLastRequest: false
};

export const pokemonSlice = createSlice({
        name: 'pokemonReducer',
        initialState,
        reducers: {
            deletePokemonShortInfo(state) {
                state.pokemonShortInfo = []
            },
            deletePokemonByTypesList(state) {
                state.pokemonsByTypesList = []
            },
        },
        extraReducers: builder => {
            builder.addCase(getPokemonInfoAction.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(getPokemonInfoAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.pokemon = action.payload
            })
            builder.addCase(getPokemonInfoAction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            builder.addCase(getPokemonShortInfoAction.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(getPokemonShortInfoAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                const qwerty = Object.values(state.pokemonShortInfo)
                if (!qwerty.map(id => id.id).includes(action.payload.id)) {
                    state.pokemonShortInfo = state.pokemonShortInfo.concat(action.payload)
                }
            })
            builder.addCase(getPokemonShortInfoAction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            builder.addCase(setPokemonTypesAction.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(setPokemonTypesAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                state.pokemonTypes = action.payload
            })
            builder.addCase(setPokemonTypesAction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })

            builder.addCase(getPokemonByTypeAction.pending, (state) => {
                state.isLoading = true
            })
            builder.addCase(getPokemonByTypeAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = ''
                const qwerty = Object.values(state.pokemonsByTypesList)
                state.pokemonsByTypesList = [...new Set([...qwerty, ...action.payload.byTypesNames])]
                state.isLastRequest = action.payload.lastIndexCheck
            })
            builder.addCase(getPokemonByTypeAction.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
        }
    }
)