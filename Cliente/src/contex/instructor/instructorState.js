import React, {useReducer} from 'react'

import instructorReducer from "./instructorReducer";
import instructorContext from "./instructorContext";

import {
        VERIFICA_INSTRUCTOR,
        INICIA_SESION,
        REGISTRA_INSTRUCTOR,
        OBTIENE_INSTRUCTOR,
        } from "../../type"

const InstructorState = props => {

    const initialState = {
        instructores:[
            {
                id: 1,
                nombre: "Marcos Escobar",
                ci: "4730472",
                tipo:"admin",
                carrera: "LCIK",
                horas: 20,
                estudianteId: "1",
                presente: true
            },
            {
                id: 2,
                nombre: "Juan Escobar",
                ci: 4730473,
                tipo:"admin",
                carrera: "LCIK2",
                horas: 20,
                estudianteId: "1",
                presente: true
            },
            {
                id: 3,
                nombre: "Ariel Escobar",
                ci: 4730474,
                tipo:"admin",
                carrera: "INI",
                horas: 20,
                estudianteId: "3",
                presente: true
            },
        ],
        instructor: {
            id: 0,
                nombre: "",
                ci: 0,
                tipo:"",
                carrera: "",
                horas: 0,
                estudianteId: "",
                presente: false
        },
        instructorAuth: null,
        autenticado: null,
        pagina:null,

    }

    const [state, dispatch] = useReducer(instructorReducer, initialState)

    //funciones
    const enInstructor = (estado) => {
        dispatch({
            type: VERIFICA_INSTRUCTOR,
            payload: estado
        })
    }

    const iniciaSesion = (instructor) => {

        dispatch({
            type: INICIA_SESION,
            payload: instructor
        })
    }

    const registrarse = instructor => {
        dispatch({
            type: REGISTRA_INSTRUCTOR,
            payload: instructor
        })
    }

    const obtieneInstructor = ci => {
        dispatch({
            type: OBTIENE_INSTRUCTOR,
            payload: ci
        })
    }
    return(
        <instructorContext.Provider
            value={{
                pagina: state.pagina,
                instructores: state.instructores,
                instructorAuth: state.instructorAuth,
                estudiante: state.estudiante,
                instructor: state.instructor,

                enInstructor,
                iniciaSesion,
                registrarse,
                obtieneInstructor,
                

            }}
        >
            {props.children}
        </instructorContext.Provider>
    )
}

export default InstructorState;