import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
    typography: {
        fontFamily: "fantasy",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 735,
            lg: 960,
            xl: 1920,
        },
    },
    palette: {
            primary: {
                main: "#97232C",
            },
            secondary: {
                main: "#91142A",
            },
            kukkaRed: {
                main: "#D6153C",
            },
            text: {
                primary: grey[900],
                secondary: grey[800],
            },
            
        },
})

export const darktheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 735,
            lg: 960,
            xl: 1920,
        },
    },
    palette: {
            primary: {
                main: "#d64f15", // orange
            },
            secondary: {
                main: "#14913c", // green
            },
            kukkaRed: {
                main: "#D6153C",
            },
            text: {
                primary: "#7a7a7a",
                secondary: grey[500],
            },
            background: {
                default: "#121212",
                paper: grey[900],
            },
        },
    typography: {
        fontFamily: "system-ui, sans-serif",
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "primary",
                },
            },
        },
    },
});
