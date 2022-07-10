import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

const theme = createTheme({
    palette: {
        primary: {
            main: "#333",
            contrastText: "#fff",
        },
        secondary: {
            main: "#fff",
            contrastText: "#333",
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: ["Roboto", "Noto Sans JP", "Cinzel", "sans-serif"].join(
            ","
        ),
        button: {
            textTransform: "none",
        },
    },
})

export default theme
