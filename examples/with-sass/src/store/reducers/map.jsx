const INITIAL_STATE = {
    pokemons: [],
    isLoading: false,
    modalOpen: false
}

function MapReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: true }
        case "GET_POKEMON":
            return { ...state, pokemons: [...state.pokemons, action.payload], isLoading: false }
        case "TOGGLE_MODAL":
            return { ...state, modalOpen: action.payload }
        default:
            return state;
    }
}

export default MapReducer