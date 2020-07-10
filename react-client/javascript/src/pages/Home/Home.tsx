import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";

const useStyles = makeStyles(theme => ({
    home: {
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "white"
    }
}));

// async function load() {
//     const result = await import('wasm');
//     sX(result.fib(10));

//     result.start_websocket();
// }
// load();

const Home = () => {
    const classes = useStyles();
    return <Grid className={classes.home}>
        <Header />
    </Grid>
}

export default Home;