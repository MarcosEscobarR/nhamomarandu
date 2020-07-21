import { VERIFICA_REGISTRO } from "../../type/index";

export default (state, action) => {
    switch (action.type) {
        case VERIFICA_REGISTRO: 
            return {
                ...state,
                enRegistro: action.payload
            }

        default:
            return state;
    }
}