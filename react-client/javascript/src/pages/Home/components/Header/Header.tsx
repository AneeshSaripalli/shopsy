import React from 'react';
import Grid from "@material-ui/core/Grid";
import "./Header.scss";
import { Typography, makeStyles, } from '@material-ui/core';
import { ReactComponent as Logo } from '../../../../../public/logo/logo.svg';

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
                <Logo />
            </Grid>
        </Grid>
    </nav>
}

export default Header;