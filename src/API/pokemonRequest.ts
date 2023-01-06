import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemonInfoRequest = (name: string | undefined | number) => {
    return instance.get(`pokemon/${name}`)
        .then(response => {
            return response.data;
        })
}

export const getPokemonTypesRequest = () => {
    return instance.get(`type`)
        .then(response => {
            return response.data.results;
        });
}

export const getPokemonsByTypeRequest = (typeName: string) => {
    return instance.get(`type/${typeName}`)
        .then(response => {
            return response.data.pokemon;
        });
}

