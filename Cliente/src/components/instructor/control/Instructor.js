import React, {useContext} from 'react'

//providers
import instructorContext from "../../../contex/instructor/instructorContext"
const Instructor = () => {

    const contextInstructor = useContext(instructorContext);
    const {instructor} = contextInstructor;

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card mt-5 p-2">
                        {instructor.nombre}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor;