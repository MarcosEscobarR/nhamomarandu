import React, { useEffect, useContext, useState } from "react";

import { Button, makeStyles } from "@material-ui/core";

//providers
import instructorContext from "../../../contex/instructor/instructorContext";

const useStyle = makeStyles({
    botonRegistro: {
        marginTop: 5,
    },
});

const Login = () => {
    const contextInstructor = useContext(instructorContext);
    const { enInstructor, iniciaSesion } = contextInstructor;

    useEffect(() => {
        enInstructor(true);
    }, []);

    const classes = useStyle();

    const [Datos, setDatos] = useState({
        nombre: "",
        ci: "",
    });

    const [Error, setError] = useState(false);

    const { nombre, ci } = Datos;

    const onChange = (e) => {
        setDatos({
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        //validar
        if (nombre.trim === "" || ci.trim() === "") {
            setError(true);
            return;
        }

        setError(false);
        //si todo va bien...
    };

    return (
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-md-6 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-center mb-4 font-weight-bold">
                                Iniciar Sesión
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

                                    <button
                                        type="submit"
                                        className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                    >
                                        Iniciar Sesión
                                    </button>

                                    <Button
                                        variant="text"
                                        color="default"
                                        className={classes.botonRegistro}
                                        href="/instructor/registro"
                                    >
                                        Registrarse
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
