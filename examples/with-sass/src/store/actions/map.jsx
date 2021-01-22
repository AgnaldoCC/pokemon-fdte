import axios from "axios";

const searchPokemon = () => async (dispatch) => {
    dispatch(setLoading());
    const randomNumber =  Math.floor(Math.random() * (807 - 1)) + 1;
    return await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`).then((response) => {
        setTimeout(() => {
            dispatch(toggleModal(true));
            return dispatch({
                type: "GET_POKEMON",
                payload : response.data
            })
        }, 2000)
    })
}

const setLoading = () => dispatch => {
    return dispatch({
        type: "SET_LOADING"
    })   
}

const toggleModal = (action = false) => {
    return {
        type: "TOGGLE_MODAL",
        payload: action
    }
}

export { searchPokemon, toggleModal };