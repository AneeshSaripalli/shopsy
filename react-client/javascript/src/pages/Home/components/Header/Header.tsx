import { makeStyles } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    title: {
        color: "white"
    },
    grid: {
        height: "100%"
    }
}))

const Header: React.FC<{}> = props => {
    const classes = useStyles();
    return <nav id="header-nav">
        <Grid container justify="space-between" alignItems="stretch" className={classes.grid}>
            <Grid container item sm alignItems="center">
                <Link to="/">
                    <img height="50px" src="/logo/logo.svg" id="logo" />
                </Link>
            </Grid>
        </Grid>
    </nav>
}

export default Header;