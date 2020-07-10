import {
    createMuiTheme,
    responsiveFontSizes,
    Theme,
} from "@material-ui/core/styles";

// You can pass an object to the 'createMuiTheme' function
const theme: Theme = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: "Open Sans",
        },
        palette: {
            background: {
                default: "#f2f3f7",
                paper: "#ffffff",
            },
            secondary: {
                main: "#4aa0fe",
            },
            primary: {
                light: "#36496a",
                main: "#213559",
            },
        },
    })
);

export default theme;
