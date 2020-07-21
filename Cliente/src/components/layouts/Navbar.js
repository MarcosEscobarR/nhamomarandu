import React, { useContext } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    ThemeProvider,
} from "@material-ui/core/";

//temas
import themeNav from "../../config/themeNav";
import themeNavInstructor from "../../config/themeNavInstructor";
import themeNavControl from "../../config/themeNavControl";

//providers
import mapaContext from "../../contex/mapa/mapaContex";
import instructorContext from "../../contex/instructor/instructorContext"

const useStyle = makeStyles((theme) => ({
    offset: {
        ...theme.mixins.toolbar,
        marginBoton: "1rem",
    },
    title: {
        flexGrow: 1,
        color: "#FFF",
        paddingLeft: 2,
        fontSize: 25
    },
}));

const Navbar = () => {
    const contextMapa = useContext(mapaContext);
    const { enRegistro } = contextMapa;

    const contextInstructor = useContext(instructorContext);
    const {pagina} = contextInstructor;

    const classes = useStyle();

    //condicion para cambiar el color del nav depende de donde este
    let tema
    if(pagina === "staff"){
        tema = themeNavInstructor;
    }else if(pagina === "control"){
        tema = themeNavControl;    
    
    }else{
        tema = themeNav;
    }
    return (
        <ThemeProvider theme={tema}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="initial" className={classes.title}>Ñamomarandu</Typography>
                    {!enRegistro ? (
                        <Button variant="text" color="light" href = "/student">
                            Registrarse
                        </Button>
                    ) : null}
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </ThemeProvider>
    );
};

export default Navbar;
