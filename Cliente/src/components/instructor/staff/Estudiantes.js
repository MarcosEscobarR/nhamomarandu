import React, {useContext} from 'react'

//providers
import studentsContext from "../../../contex/students/studentsContext";

//componentes
import Estudiante from "./Estudiante";

const Estudiantes = () => {

    const contextStudent = useContext(studentsContext);
    const { instructorStudent } = contextStudent;

    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="card p-5 mt-3">
                    <h2>Estudiantes</h2>
                    <hr/>
                    {instructorStudent.map((est) => (
                        <Estudiante est={est} />
                    ))}

                
                </div>
            </div>
        </div>

    )
}

export default Estudiantes 