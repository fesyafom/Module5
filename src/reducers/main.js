import {
    GET_POKEMONS_REQUEST,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAIL,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAIL,
    SELECT_POKEMON,
    LIKE_POKEMON,
    UNLIKE_POKEMON
} from '../constants/Main'

const initialState = {
    data: {},
    pokemon_info: {},
    isSelected: 0,
    isLiked: []
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case    GET_POKEMONS_REQUEST:
            return {...state};
        case    GET_POKEMONS_SUCCESS:
            return {...state, ...{data: action.payload}};
        case    SELECT_POKEMON:
            return {...state, ...{isSelected: action.payload}};
        case    GET_POKEMON_REQUEST:
            return {...state};
        case    GET_POKEMON_SUCCESS:
            return {...state, ...{pokemon_info: action.payload}};
        case    LIKE_POKEMON:
            return {...state, ...{isLiked: state.isLiked.concat(action.payload)}};
        case    UNLIKE_POKEMON:
            return {...state, ...{isLiked: state.isLiked.filter(item => item !== action.payload)}};
        default:
            return state;
    }
}