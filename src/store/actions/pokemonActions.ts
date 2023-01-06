import {getPokemonInfoRequest, getPokemonsByTypeRequest, getPokemonTypesRequest} from "../../API/pokemonRequest";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {bodyType, PokemonRequestType, TypesRequestType} from "../../types/tsTypes";

export const getPokemonInfoAction = createAsyncThunk(
    'pokemons/getPokemonInfoAction',
    async (name: string | undefined | number, thunkAPI) => {
        try {
            return await getPokemonInfoRequest(name)
        } catch (e: any) {
            console.log("problem with getPokemonInfoAction (actions)")
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getPokemonShortInfoAction = createAsyncThunk(
    'pokemons/getPokemonShortInfoAction',
    async (name: string | undefined | number, thunkAPI) => {
        try {
            return await getPokemonInfoRequest(name)
        } catch (e: any) {
            console.log("problem with getPokemonShortInfoAction (actions)")
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const setPokemonTypesAction = createAsyncThunk(
    'pokemons/setPokemonTypesAction',
    async (_, thunkAPI) => {
        try {
            const res = await getPokemonTypesRequest()
            return res.map((t: TypesRequestType) => {
                return t.name;
            })
        } catch (e: any) {
            console.log("problem with setPokemonTypesAction (actions)")
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const getPokemonByTypeAction = createAsyncThunk(
    'pokemons/getPokemonByTypeAction',
    async (body: bodyType, thunkAPI) => {
        try {
            const {typeName, lastIndexCheck} = body
            const res = await getPokemonsByTypeRequest(typeName)
            const byTypesNames = (res.map((p: PokemonRequestType) => {
                return (p.pokemon.name)
            }))
            return {byTypesNames, lastIndexCheck}
        } catch (e: any) {
            console.log("problem with getPokemonByTypeAction (actions)")
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)