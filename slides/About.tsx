import React from "react"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import { mq } from "./css"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    })
)

const bottomBg = css({
    backgroundImage: "url('/img/book.jpg')",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "cover",
})

const cover = css({
    content: "''",
    position: "absolute",
    top: "0",
    right: "0",
    height: "100%",
    width: "100%",
    [mq[0]]: {
        background: "rgba(0,0,0,0.3)",
    },
    [mq[2]]: {
        background: "none",
    },
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
    h2: {
        margin: "12px 0",
    },
    width: "40%",
    height: "auto",
    padding: "96px 96px",
    color: "#fff",
    letterSpacing: "0.1em",
    textShadow: "1px 0 5px black",
    [mq[0]]: {
        padding: "56px 36px 56px",
        width: "90%",
        margin: "0",
    },
    [mq[1]]: {
        padding: "56px 36px 56px",
        width: "90%",
        margin: "0",
    },
    [mq[2]]: {
        padding: "98px 80px 56px",
        width: "50%",
    },
    [mq[3]]: {
        padding: "98px 80px 56px",
    },
})

const aboutArea = css({
    maxWidth: "500px",
    [mq[0]]: {
        padding: "0px 4px",
    },
    [mq[1]]: {
        padding: "24px 4ßpx 24px",
        background: "none",
    },
    [mq[2]]: {
        padding: "0px 0px",
    },
})

const About: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={cover}>
                <div css={topBg}>
                    <div css={sliderContainer}>
                        <Grid container spacing={1}>
                            <Grid>
                                <h2>ABOUT</h2>
                                <div css={aboutArea}>
                                    <p>
                                        私はIT化が遅れている医療現場で看護師として働く中、ITやWEBの力を使えばもっと効率的に、もっと効果的に業務が行えるのにと疑問や違和感を持つようになりました。
                                    </p>
                                    <p>
                                        そして、「WEBやITの力を使って医療をもっと身近なものにしたい」と思い、ウェブエンジニアに転身しました。
                                    </p>
                                    <p>
                                        現在は元看護師ウェブエンジニアという個性とキャリアを活かし、「ヘルステック関連」のサービスやWEBサイト制作に携われるよう日々勉強しております。
                                    </p>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
