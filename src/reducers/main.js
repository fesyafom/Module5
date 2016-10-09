import {
    GET_POKEMONS_REQUEST,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAIL,
    FILTER_BY_TYPE
} from '../constants/Main'

const initialState = {
    data: [],
    loaded: false,
    activeTab: 0
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case    GET_POKEMONS_REQUEST:
            return {...state, ...{activeTab: action.payload}};
        case    GET_POKEMONS_SUCCESS:
            return {...state, ...{data: action.payload, loaded: true}};
        case    FILTER_BY_TYPE:
            return {...state, ...{data: state.data.filter(item => filterByType(item, action.payload))}};
        default:
            return state;
    }
}


function filterByType (item,value) {
        for(let i = 0; i < item.types.length; i++) {
            if (item.types[i].name === value) {
                return true;
            }
        }
    return false;
}
