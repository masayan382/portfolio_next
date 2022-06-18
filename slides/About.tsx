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
    width: "50%",
    height: "auto",
    padding: "96px 96px",
    color: "#fff",
})

const About: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div className={classes.paper}>
                                <h2>ABOUT</h2>
                                <p>
                                    はじめまして。フロントエンドエンジニアのＴ・Ｍと申します。
                                </p>
                                <p>
                                    元々は看護師をしていましたが、IT化が遅れている医療現場で働くうちにWEBやITの力を使って医療をもっと身近なものにしたいと思うようになりウェブエンジニアに転身しました。
                                </p>
                                <p>
                                    今後は元看護師ウェブエンジニアという個性とキャリアを活かし、医療とWEBの力をかけ合わせた「ヘルステック関連」のサービスやWEBサイト制作、アプリ開発を行いたいと考えています。
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
