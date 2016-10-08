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

function objToArray (obj) {
    let arr = [];
    for(var key in obj.objects) {
        arr.push(obj.objects[key]);
    }
    return arr;
}

function getData(dispatch,url) {
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    dispatch({
                        type: GET_POKEMONS_FAIL,
                        payload: new Error(err)
                    });
                    return;
                }

                response.json().then(function (result) {
                    let data = objToArray(result);
                    dispatch({
                        type: GET_POKEMONS_SUCCESS,
                        payload: data
                    });
                });
            }
        )
        .catch(function (err) {
            dispatch({
                type: GET_POKEMONS_FAIL,
                payload: new Error(err)
            });
        });

}

function getDataFromLS (dispatch) {
    let arr = [];
    for(let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    dispatch({
        type: GET_POKEMONS_SUCCESS,
        payload: arr
    });
}

function getPokemon(dispatch,url) {
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    dispatch({
                        type: GET_POKEMON_FAIL,
                        payload: new Error(err)
                    });
                    return;
                }

                response.json().then(function (result) {
                    dispatch({
                        type: GET_POKEMON_SUCCESS,
                        payload: result
                    });
                });
            }
        )
        .catch(function (err) {
            dispatch({
                type: GET_POKEMON_FAIL,
                payload: new Error(err)
            });
        });

}

function savePokemon(dispatch,url) {
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    dispatch({
                        type: GET_POKEMON_FAIL,
                        payload: new Error(err)
                    });
                    return;
                }
                
                response.json().then(function (result) {
                    localStorage.setItem(result.pkdx_id, JSON.stringify(result));
                });
            }
        )
        .catch(function (err) {
            dispatch({
                type: GET_POKEMON_FAIL,
                payload: new Error(err)
            });
        });

}

export function getPokemonsList(url="localStorage") {
    return (dispatch) => {
        dispatch({
            type: GET_POKEMONS_REQUEST,
            payload: null
        });
        
        if(url==="localStorage") {
            getDataFromLS(dispatch);
        }
        else getData(dispatch,url);
    }
}

export function selectPokemon(pokemonId) {
    return (dispatch) => {
        dispatch({
            type: SELECT_POKEMON,
            payload: pokemonId
        });
    }
}

export function getAdditionalInfo(url) {
    return (dispatch) => {
        dispatch({
            type: GET_POKEMON_REQUEST,
            payload: null
        });
        
        getPokemon(dispatch,url);
    }
}

export function likePokemon(pokemonId, url) {
    return (dispatch) => {
        if(localStorage.getItem(pokemonId)) {
            dispatch({
                type: UNLIKE_POKEMON,
                payload: pokemonId
            });
            
            localStorage.removeItem(pokemonId);
        }
        else {
            dispatch({
                type: LIKE_POKEMON,
                payload: pokemonId
            });
            
            savePokemon(dispatch,url);
        }
    }
}

export function getLikes() {
    return (dispatch) => {
        let arr = [];
        for(let i = 0;i<localStorage.length;i++) {
            arr.push(+localStorage.key(i));
        }
        
        dispatch({
            type: LIKE_POKEMON,
            payload: arr
        });
        
    }
}

