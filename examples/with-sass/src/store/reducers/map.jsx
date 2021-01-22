const INITIAL_STATE = {
    pokemons: [],
    currentPokemon: {},
    currentPokemonPosition: -1,
    isLoading: false,
    modalInfoOpen: false
}

function MapReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: true, modalInfoOpen: false }
        case "GET_POKEMON":
            return { ...state, isLoading: false, currentPokemon: action.payload }
        case "TOGGLE_MODAL_INFO":
            if (!action.payload) {
                return { ...state, modalInfoOpen: action.payload, currentPokemon: {}, currentPokemonPosition: -1 }
            } else {
                return { ...state, modalInfoOpen: action.payload }
            }
        case "SET_CURRENT_POKEMON":
            return { ...state, currentPokemon: action.payload }
        case "SET_POKEMON_POSITION": {
            return { ...state, currentPokemonPosition: action.payload }
        }
        case "CAPTURE_POKEMON": {
            return { ...state, pokemons: [...state.pokemons, action.payload], modalInfoOpen: false }
        }
        case "RELEASE_POKEMON": {
            const newPokemons = state.pokemons.filter((e, i) => {
                return i !== action.payload;
            })
            return { ...state, pokemons: newPokemons , modalInfoOpen: false, currentPokemonPosition: -1 }
        }
        case "CHANGE_POKEMON_NAME": {
            const newPokemons = state.pokemons.map((e, i) => {
                if(action.payload.position === i) {
                    e.name = action.payload.name;
                }
                return e;
            })
            return { ...state, pokemons: newPokemons, currentPokemon: {...state.currentPokemon, name: action.payload.name} }
        }
        default:
            return state;
    }
}

export default MapReducer