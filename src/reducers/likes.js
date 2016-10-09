import {
    LIKE_POKEMON,
    UNLIKE_POKEMON
} from '../constants/Likes'

const initialState = {
    isLiked: []
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case    LIKE_POKEMON:
            return {...state, ...{isLiked: state.isLiked.concat(action.payload)}};
        case    UNLIKE_POKEMON:
            return {...state, ...{isLiked: state.isLiked.filter(item => item !== action.payload)}};
        default:
            return state;
    }
}