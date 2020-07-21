import React from 'react'

import {Grid, Box, makeStyles} from "@material-ui/core"
import Moves from "./Mapa"

const useStyle = makeStyles({

    container: {
        backgroundColor: "#FFFFFF",
        padding: 0,
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20,
        border:2,
        borderColor:"#A0A6A9",
        paddingLeft: 10,
        paddingRight: 10
    },
})

const Direccion = () => {

    const classes = useStyle();

    return (
        <Grid item xs={12} className={classes.container}>
            <Box
                textAlign="justify"
                padding={2}
                paddingX={3}

            >
            <Moves />
            </Box>
        </Grid>
    )
}

export default Direccion;