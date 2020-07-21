import React, {Fragment} from 'react'
import {Grid, Box, makeStyles} from "@material-ui/core"

const useStyle = makeStyles({

    info: {
        fontFamily: 'Lato',
    },
    container: {
        backgroundColor: "#FFFFFF",
        paddingTop: 50,
        padding: 0,
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20,
        border:2,
        borderColor:"#A0A6A9",
        paddingLeft: 10,
        paddingRight:10
    },
})

const Info = () => {

    const classes = useStyle();

    return (

        <Grid item xs={12} className={classes.container}> 
            <Box 
                textAlign="center"
                fontFamily="Lato, Arial, sans-serif"
                marginBottom={5}

            >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Box>
        </Grid>

    )
}

export default Info