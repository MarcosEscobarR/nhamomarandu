import React, {useContext, useEffect, useState} from "react";

import mapaContext from "../../contex/mapa/mapaContex"
import StudentsContext from "../../contex/students/studentsContext";

const Registro = () => {


    const contextMapa = useContext(mapaContext);
    const {verificaLugar} = contextMapa;

    const contextStudent = useContext(StudentsContext)
    const {cargaEstudiante} = contextStudent;

    const [Datos, setDatos] = useState({
        nombre: '', 
        edad: '',
        ciudad: ''
    })

    const [Error, setError] = useState({
        estado: false,
        mensaje: ""
    })

    const onChange = (e) => {
        setDatos({
            ...Datos,
            [e.target.name] : e.target.value
        })
        
    }

        const { nombre, edad, ciudad } = Datos;
    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(!nombre.trim() === '' || !edad.trim() === '' || !ciudad.trim() === '' ){
            setError({
                estado: true,
                mensaje: "Todos los Campos son Obligatorios"
            })
        }

        
        //pasar al state
        cargaEstudiante(Datos)

        //vaciar el formulario
        setDatos({
            ...Datos,
            nombre:'',
            edad:'',
            ciudad:''
        })

        //pasar al action


    }
    useEffect(() => {
        verificaLugar(true)
    }, [])

    return (
        <div className="row justify-content-center ">
            <div className="col-md-8 mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center mb-4 font-weight-bold">
                            Registrar
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input
                                    type="text"
                                    className="form-control mb-4"
                                    placeholder="Ingrese su Nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChange}
                                />

                                <label>Edad</label>
                                <input
                                    type="number"
                                    className="form-control mb-4"
                                    placeholder="Ingrese su Edad"
                                    name="edad"
                                    value={edad}
                                    onChange={onChange}
                                />

                                <label>Ciudad Actual</label>
                                <input
                                    type="text"
                                    className="form-control mb-4"
                                    placeholder="Ingrese la Ciudad donde Vive"
                                    name="ciudad"
                                    value={ciudad}
                                    onChange={onChange}
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
        </div>
    );
};

export default Registro;
