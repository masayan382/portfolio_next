import React from "react"
import Image from "next/image"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
        },
    })
)

const bottomBg = css({})
const topBg = css({
    backgroundImage: "url('/img/shadow.png')",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
})

const About: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <div>
                            <div className={classes.paper}>
                                <h2>ABOUT</h2>
                                <p>サンプルサンプルサンプル</p>
                                <p>サンプルサンプルサンプル</p>
                                <p>サンプルサンプルサンプル</p>
                                <p>サンプルサンプルサンプル</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default About
