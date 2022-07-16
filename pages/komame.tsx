import React from "react"
import { Header, Footer } from "../layouts/index"
// import { makeStyles } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { css } from "@mui/styled-engine"

const contentsBase = css({
    background: "red",
    margin: "56px 0",
    color: "#333",
})

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
        },
        toolbar: {
            color: "#000",
        },
        typography: {
            color: "#333",
        },
    })
)

const list = () => {
    const classes = useStyles()
    return (
        <div css={contentsBase}>
            <Header style={{ color: "#000" }} />
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Grid item xs={8}>
                        <h2>KOMAME</h2>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={10}>
                        <Paper>例えば</Paper>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    )
}

export default list
