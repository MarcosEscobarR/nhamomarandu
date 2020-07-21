import React, {useEffect, useContext} from "react";
import { Grid, Container, Divider } from "@material-ui/core";

//componentes
import Info from "./Info";
import Direccion from "./Direccion";

import mapaContext from "../../contex/mapa/mapaContex"

const Index = () => {

    const contextMapa = useContext(mapaContext);
    const {verificaLugar} = contextMapa;

    useEffect(() => {
        verificaLugar(null)
    }, [])

    return (
        <Container fixed >
            <Grid container >
                <Info />
                <Divider />  
                <Direccion />    
            </Grid>

        </Container>
    );
};

export default Index;
