import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    home: {
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "white"
    }
}));

const Home = () => {
    const classes = useStyles();
    const [x, sX] = useState<number>(0);
    async function load() {
        const result = await import('wasm');
        sX(result.fib(10));

        result.start_websocket();
    }
    load();

    return <Grid className={classes.home}>
        Value is {x}
    </Grid>
}

export default Home;