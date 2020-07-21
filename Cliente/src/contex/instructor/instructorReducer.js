
import {
        VERIFICA_INSTRUCTOR,
        INICIA_SESION,
        REGISTRA_INSTRUCTOR,
        OBTIENE_INSTRUCTOR,
     } from "../../type"

export default (state, action) => {
    switch (action.type) {
        
        case VERIFICA_INSTRUCTOR:
            return {
                ...state,
                pagina: action.payload
            }
        case INICIA_SESION:
            return {
                ...state,
                instructorAuth: state.instructores.filter(instructor => instructor.nombre === action.payload.nombre)
            }
        case REGISTRA_INSTRUCTOR:
            return {
                ...state,

            }
        case OBTIENE_INSTRUCTOR:
            return {
                ...state,
                instructor : state.instructores.filter(i => i.ci == action.payload)
            }
       default:
            return state;
    }
}