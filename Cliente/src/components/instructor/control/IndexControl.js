import React, { useContext, useEffect, Fragment, useState } from "react";
import {
    Box,
    makeStyles,
    createMuiTheme,
    ThemeProvider,
    responsiveFontSizes,
    Typography,
    Button,
} from "@material-ui/core";

//providers
import instructorContext from "../../../contex/instructor/instructorContext";

//componentes
import Instructor from "./Instructor";

const useStyle = makeStyles({
    box: {
        backgroundColor: "#26a69a",
        padding: 30,
        textAlign: "center",
        color: "white",
    },
    button: {
        marginTop: 10,
    },
});

let theme = createMuiTheme({
    typography: {
        fontFamily: "Lato, Arial, sans-seri",
    },
    palette: {
        primary: {
            main: "#9ccc65",
        },
    },
});
theme = responsiveFontSizes(theme);

const IndexControl = () => {
    useEffect(() => {
        enInstructor("control");
    }, []);

    const classes = useStyle();
    const contextInstructor = useContext(instructorContext);
    const { enInstructor, obtieneInstructor, instructor } = contextInstructor;

    const [Error, setError] = useState(false)

    let ci
    const onChange = (e) => {
        ci = e.target.value
    }

    const onSubmit = e => {
        e.preventDefault()

        if(ci.trim() === ''){
            setError(true)
            return;
        }

        setError(false)
        console.log(ci.typeOf());
        
        obtieneInstructor(ci)
    }

    return (
        <Fragment>
            <Box className={classes.box}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h5">
                        Escribe el CI del Instructor
                    </Typography>

                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="Ingrese el CI"
                                value={ci}
                                onChange = {onChange}
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                onClick = {onSubmit}
                                className={classes.button}
                            >
                                Buscar
                            </Button>
                        </div>
                    </form>
                </ThemeProvider>
            </Box>

            <Instructor />
        </Fragment>
    );
};

export default IndexControl;
