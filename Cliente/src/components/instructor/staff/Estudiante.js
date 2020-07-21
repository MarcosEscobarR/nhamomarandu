import React, {useContext} from 'react'

//providers
import studentContext from "../../../contex/students/studentsContext";

const Estudiante = ({est}) => {

    const contextStudent = useContext(studentContext);
    const { eliminaEstudiante } = contextStudent
    return (
        <div>
            <h5>Nombre: </h5> <p>{est.nombre}</p>
            <h5>Edad: </h5> <p>{est.edad}</p>
            <h5>Ciudad: </h5> <p>{est.ciudad}</p>
            <button className="btn btn-danger" onClick ={() => eliminaEstudiante(est.id)}>Eliminar Estudiante</button>
            <hr />
        </div>
        
    )
}

export default Estudiante