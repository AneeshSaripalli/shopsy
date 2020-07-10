import { Grid } from "@material-ui/core";
import React from 'react';
import { makeStyles } from "@material-ui/core";

type IProps = {
    footer?: React.ReactNode,
    header?: React.ReactNode
    children?: React.ReactNode
}

const useStyles = makeStyles((theme) => ({
    pageGrid: {
        minHeight: "100vh",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "1920px",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    body: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    footer: {
        width: "100%",
        border: "none"
    },
    header: {
        width: "100%",
        border: "none"
    }
}));


const ContentLayout: React.FC<IProps> = (props) => {
    const { children, header, footer } = props;
    const classes = useStyles();
    return <Grid container className={classes.pageGrid}>
        <Grid item className={classes.header}>
            {header}
        </Grid>
        <Grid item className={classes.body}>
            {children}
        </Grid>
        <Grid item className={classes.footer}>
            {footer}
        </Grid>
    </Grid>
}

export default ContentLayout;