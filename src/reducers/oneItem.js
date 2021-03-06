import {
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAIL,
    SELECT_POKEMON,
} from '../constants/OneItem'

const initialState = {
    pokemon_info: {},
    isSelected: 0
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case    SELECT_POKEMON:
            return {...state, ...{isSelected: action.payload}};
        case    GET_POKEMON_REQUEST:
            return {...state};
        case    GET_POKEMON_SUCCESS:
            return {...state, ...{pokemon_info: action.payload}};
        default:
            return state;
    }
}