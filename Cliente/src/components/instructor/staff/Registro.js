import React, { useContext, useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";

//providers
import instructorContext from "../../../contex/instructor/instructorContext";

const useStyle = makeStyles({
    botonRegistro: {
        marginTop: 5,
    },
});

const RegistroInstructor = () => {
    const classes = useStyle();

    const contextInstructor = useContext(instructorContext);
    const { enInstructor, iniciaSesion } = contextInstructor;

    useEffect(() => {
        enInstructor(true);
    }, []);

    const [Datos, setDatos] = useState({
        nombre: "",
        ci: "",
        carrera: "",
        tipo: "staff",
        horas: 0,
        estudiante: "",
        presente: false,
    });

    const [Error, setError] = useState(false);

    const { nombre, ci, carrera } = Datos;

    const onChange = (e) => {
        setDatos({
            ...Datos,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {

        e.preventDefaultt();
        
        if (nombre.trim() === "" || ci.trim() === "" || carrera.trim() === "") {
            setError(true);
            return;
        }

        setError(false);
    };

    return (
        <div className="row justify-content-center ">
            <div className="col-md-6 mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center mb-4 font-weight-bold">
                            Registrarse
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

                                <label>Cedula de Identidad</label>
                                <input
                                    type="text"
                                    className="form-control mb-4"
                                    placeholder="Ingrese su CI"
                                    name="ci"
                                    value={ci}
                                    onChange={onChange}
                                />
                                <label>Carrera</label>
                                <select
                                    className="form-control mb-4"
                                    name="carrera"
                                    value={carrera}
                                    onChange={onChange}
                                >
                                    <option value="">
                                        --SELECCIONA CARRERA--
                                    </option>
                                    <option value="LCIK">LCIK</option>
                                    <option value="INGINFO">ING info</option>
                                    <option value="INGELECTR">
                                        ING electr
                                    </option>
                                </select>

                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                >
                                    Restrarse
                                </button>

                                <Button
                                    variant="text"
                                    color="default"
                                    className={classes.botonRegistro}
                                    href="/instructor/login"
                                >
                                    Volver a Login
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistroInstructor;
