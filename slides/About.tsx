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
const topBg = css({
    backgroundImage: "url('/img/shadow95.png')",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
})

const sliderContainer = css({
    width: "40%",
    height: "auto",
    padding: "96px 96px",
    color: "#fff",
    letterSpacing: "0.1",
    textShadow: "1px 0 5px black",
})

const About: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            <div>
                                <h2>ABOUT</h2>
                                <p>
                                    私はIT化が遅れている医療現場で看護師として働く中、ITやWEBの力を使えばもっと効率的に、もっと効果的に業務が行えるのにと疑問や違和感を持つようになりました。
                                </p>
                                <p>
                                    そして、「WEBやITの力を使って医療をもっと身近なものにしたい」と思い、ウェブエンジニアに転身しました。
                                </p>
                                <p>
                                    現在は元看護師ウェブエンジニアという個性とキャリアを活かし、「ヘルステック関連」のサービスやWEBサイト制作に就くべく日々勉強しております。
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default About
