import axios from "axios";

const searchPokemon = () => async (dispatch) => {
    dispatch(setLoading());
    const randomNumber = Math.floor(Math.random() * (807 - 1)) + 1;
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then((response) => {
        setTimeout(() => {
            dispatch(toggleModalInfo(true));
            return dispatch({
                type: "GET_POKEMON",
                payload: response.data
            })
        }, 2000)
    });
    return pokemon;
}

const setLoading = () => dispatch => {
    return dispatch({
        type: "SET_LOADING"
    })
}

const toggleModalInfo = (action = false) => {
    return {
        type: "TOGGLE_MODAL_INFO",
        payload: action
    }
}

const setCurrentPokemon = (pokemon) => {
    return {
        type: "SET_CURRENT_POKEMON",
        payload: pokemon
    }
}

const setPokemonPosition = (index) => {
    return {
        type: "SET_POKEMON_POSITION",
        payload: index
    }
}

const capturePokemon = (pokemon) => {
    return {
        type: "CAPTURE_POKEMON",
        payload: pokemon
    }
}

const releasePokemon = (index) => {
    return {
        type: "RELEASE_POKEMON",
        payload: index
    }
}

const changePokemonName = (name, position) => {
    return {
        type: "CHANGE_POKEMON_NAME",
        payload: { name, position }
    }
}

export { searchPokemon, toggleModalInfo, setCurrentPokemon, capturePokemon, releasePokemon, setPokemonPosition, changePokemonName };