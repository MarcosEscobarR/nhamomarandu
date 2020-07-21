import React, { useReducer } from "react";

import studentReducer from "./studentsReducer";
import StudentsContext from "./studentsContext";

import { CARGA_ESTUDIANTE, OBTINE_ESTUDIANTES, ELIMINA_ESTUDIANTES } from "../../type/index";
const StudentState = (props) => {
    const initialState = {
        student: [
            {
                id: 1,
                nombre: "Juan Perez",
                edad: 60,
                ciudad: "Asuncion",
                studentId: 1
            },
            {
                id: 2,
                nombre: "Juan Perez2",
                edad: 602,
                ciudad: "Asuncion2",
                studentId: 1
            },
            {
                id: 3,
                nombre: "Juan Perez3",
                edad: 603,
                ciudad: "Asuncion3",
                studentId: 1
            },
            {
                id: 1,
                nombre: "Juan Perez",
                edad: 60,
                ciudad: "Asuncion",
                studentId: 2
            },
            {
                id: 2,
                nombre: "Juan Perez2",
                edad: 602,
                ciudad: "Asuncion2",
                studentId: 2
            },
            {
                id: 3,
                nombre: "Juan Perez3",
                edad: 603,
                ciudad: "Asuncion3",
                studentId: 2
            },
            {
                id: 1,
                nombre: "Juan Perez",
                edad: 60,
                ciudad: "Asuncion",
                studentId: 3
            },
            {
                id: 2,
                nombre: "Juan Perez2",
                edad: 602,
                ciudad: "Asuncion2",
                studentId: 3
            },
            {
                id: 3,
                nombre: "Juan Perez3",
                edad: 603,
                ciudad: "Asuncion3",
                studentId: 3
            }
        ],
        instructorStudent: []
    };

    const [state, dispatch] = useReducer(studentReducer, initialState);

    //funciones
    const cargaEstudiante = datos => {

        dispatch({
            type: CARGA_ESTUDIANTE,
            payload: datos
        })
    }

    const obtineEstudiante = (id) => {
        dispatch({
            type: OBTINE_ESTUDIANTES,
            payload: id
        })
    }

    const eliminaEstudiante = (id) => {
        dispatch({
            type: ELIMINA_ESTUDIANTES,
            payload: id
        })
    }

    return (
        <StudentsContext.Provider
            value={{
                student: state.student,
                instructorStudent: state.instructorStudent,

                cargaEstudiante,
                obtineEstudiante,
                eliminaEstudiante
            }}
        >
            {props.children}
        </StudentsContext.Provider>
    );
};

export default StudentState;
