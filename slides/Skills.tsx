import React from "react"
import Image from "next/image"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import {
    Html,
    Css,
    Php,
    Javascript,
    Wordpress,
    ReactJs,
    Design,
    Vue,
} from "../components/skillCircles/index"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    })
)

const bottomBg = css({
    backgroundImage:
        "linear-gradient(90deg, rgba(115, 248, 224, 1), rgba(150, 167, 241, 1))",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "cover",
})
const topBg = css({
    backgroundImage: "url('/img/shadow95.png')",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
})

const sliderContainer = css({
    width: "100%",
    height: "100%",
    padding: "96px 96px",
    margin: "0 auto",
    color: "#fff",
})

const circleArea = css({
    width: "100%",
    display: "flex",
})

const Skills: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div css={circleArea}>
                                <div>
                                    <h2>Skills</h2>
                                    <ul>
                                        <li>Web Design</li>
                                        <li>Front-end</li>
                                        <li>Back-end</li>
                                        <li>SEO, Monetize</li>
                                        ... and more
                                    </ul>
                                </div>
                                <div>
                                    <Html />
                                    <Css />
                                    <Php />
                                    <Javascript />
                                    <Wordpress />
                                    <Vue />
                                    <ReactJs />
                                    <Design />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Skills
