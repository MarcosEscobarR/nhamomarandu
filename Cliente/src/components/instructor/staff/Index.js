import React, { useState, useContext, Fragment, useEffect } from "react";

//providers
import StudentContext from "../../../contex/students/studentsContext";
import instructorContext from "../../../contex/instructor/instructorContext";

//componentes
import Estudiantes from "./Estudiantes";

const IndexInstructor = () => {



    const contextInstructor = useContext(instructorContext);
    const { enInstructor, cargaEstudiantes } = contextInstructor;

    useEffect(() => {
        enInstructor("staff")
    }, [])

    const contextStudent = useContext(StudentContext);
    const { cargaEstudiante, obtineEstudiante, instructorStudent, student } = contextStudent;

    useEffect(() => {
        //le pasamos id 1 como prueba
        obtineEstudiante(1);

    },[student])

    const [Datos, setDatos] = useState({
        id: 1,
        nombre: "",
        edad: "",
        ciudad: "",
        studentId: 1
    });

    const [Error, setError] = useState(false);

    const onChange = (e) => {
        setDatos({
            ...Datos,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if (
            nombre.trim() === "" ||
            edad.trim() === "" ||
            ciudad.trim() === ""
        ) {
            setError(true);
            return;
        }

        setError(false);

        //vacia el formulario
        setDatos({
            id: 1,
            nombre: "",
            edad: "",
            ciudad: "",
            studentId: 1
        })

        //caga el estudiante en el state principal de estudiantes
        cargaEstudiante(Datos);
    };

    const { nombre, edad, ciudad } = Datos;

    return (
        <Fragment>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card p-5">
                            <h1>Bienvenido Marcos Escobar</h1>
                            <hr />
                            <h6>Ingresa los datos de tu Estudiante</h6>

                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Nombre Completo</label>
                                    <input
                                        type="text"
                                        className="form-control mb-4"
                                        placeholder="Ingrese su Nombre"
                                        name="nombre"
                                        
                                        onChange={onChange}
                                        value={nombre}
                                    />

                                    <label>Edad</label>
                                    <input
                                        type="text"
                                        className="form-control mb-4"
                                        placeholder="Ingrese su Edad"
                                        name="edad"
                                        
                                        onChange={onChange}
                                       value={edad}
                                    />

                                    <label>Ciudad Actual</label>
                                    <input
                                        type="text"
                                        className="form-control mb-4"
                                        placeholder="Ingrese la Ciudad donde Vive"
                                        name="ciudad"
                                        
                                        onChange={onChange}
                                        value={ciudad}
                                    />

                                    <button
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                    >
                                        Registrarse
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               {instructorStudent.length != 0 ? <Estudiantes />:null}
            </div>

           
        </Fragment>
    );
};

export default IndexInstructor;
