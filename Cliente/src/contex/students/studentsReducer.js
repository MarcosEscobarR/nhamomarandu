import {CARGA_ESTUDIANTE, OBTINE_ESTUDIANTES, ELIMINA_ESTUDIANTES} from "../../type/index"

export default (state, action) => {
    switch (action.type) {

    case CARGA_ESTUDIANTE:
        return {
            ...state,
            student: [...state.student, action.payload ]
        }        
        
        case OBTINE_ESTUDIANTES:
            return {
                ...state,
                instructorStudent: state.student.filter(st => st.studentId === action.payload)
            }
        
        case ELIMINA_ESTUDIANTES:
            return {
                ...state,
                student: state.student.filter(est => est.id != action.payload)
            }
        default:
            return state;
    }
}