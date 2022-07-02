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

const breakpoints = [0, 400, 600, 960, 1280, 1920]

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
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
    width: "calc(100%-96px)",
    height: "100%",
    padding: "98px 80px 56px 96px",
    margin: "0",
    color: "#fff",
    [mq[0]]: {
        padding: "56px 32px 56px",
    },
    [mq[1]]: {
        padding: "56px 24px 56px",
    },
    [mq[2]]: {
        padding: "98px 80px 56px 96px",
    },
})

const circleArea = css({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "> div": {
        margin: "20px 20px",
    },
    [mq[0]]: {
        "> div": {
            margin: "12px 12px",
            width: "96px",
        },
    },
    [mq[2]]: {
        "> div": {
            margin: "12px 12px",
            width: "114px",
        },
    },
    [mq[3]]: {
        "> div": {
            margin: "24px 24px",
            width: "140px",
        },
    },
})

const hydeBlock = css({
    display: "none",
    [mq[3]]: {
        width: "100% !important",
        display: "block",
    },
})

const Skills: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <h2 style={{ marginTop: 0 }}>Skills</h2>
                            <ul>
                                <li>Web Design</li>
                                <li>Front-end</li>
                                <li>Back-end</li>
                                <li>SEO, Monetize</li>
                                ... and more
                            </ul>
                        </Grid>
                    </Grid>
                    <div css={circleArea}>
                        <div>
                            <Html />
                        </div>
                        <div>
                            <Css />
                        </div>
                        <div>
                            <Php />
                        </div>
                        <div>
                            <Javascript />
                        </div>
                        <div css={hydeBlock}></div>
                        <div>
                            <Wordpress />
                        </div>
                        <div>
                            <Vue />
                        </div>
                        <div>
                            <ReactJs />
                        </div>
                        <div>
                            <Design />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
