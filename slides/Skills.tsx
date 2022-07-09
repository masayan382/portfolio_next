import React from "react"
import Image from "next/image"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"
import "tippy.js/themes/light.css"
import "tippy.js/animations/perspective.css"
import { mq } from "./css"
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
        "linear-gradient(90deg, rgba(132, 250, 177, 1) 45%, rgba(143, 213, 241, 1))",
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
    h2: {
        margin: "12px 0",
    },
    width: "calc(100%-96px)",
    height: "100%",
    // padding: "98px 80px 56px 96px",
    margin: "0",
    color: "#fff",
    textShadow: "1px 0 5px black",
    " p": {
        margin: "8px 0",
    },
    [mq[0]]: {
        padding: "56px 20px 56px",
    },
    [mq[1]]: {
        padding: "56px 24px 56px",
    },
    [mq[2]]: {
        padding: "98px 40px 56px",
    },
    [mq[3]]: {
        padding: "98px 40px 56px",
    },
})

const textArea = css({
    padding: "0",
    [mq[0]]: {
        padding: "0px 16px",
    },
    [mq[1]]: {
        padding: "0px 12px",
    },
    [mq[2]]: {
        padding: "0px 40px",
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
        marginTop: "8px",
        "> div": {
            margin: "8px 8px",
            width: "96px",
        },
    },
    [mq[1]]: {
        marginTop: "40px",
    },
    [mq[2]]: {
        marginTop: "0px",
        "> div": {
            margin: "12px 12px",
            width: "114px",
        },
    },
    [mq[3]]: {
        marginTop: "0px",
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
                        <div css={textArea}>
                            <h2>Skills</h2>
                            <p>・Web Design</p>
                            <p>・Front-end</p>
                            <p>・Back-end</p>
                            <p>・SEO, Monetize ... and more!</p>
                            <p>
                                &nbsp;Please hover your mouse over the circles!!
                            </p>
                        </div>
                    </Grid>
                    <div css={circleArea}>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "フルスクラッチでWEBサイトを構築できます。SEOを意識したマークアップ、リッチリザルト対応できます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <Html />
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "SCSSからCSSへコンパイルできます。CSS設計もBEM～FLOCSSまで対応できます。フレームワークBootstrap,Tailwind-css,Material-UI,emotion使えます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <Css />
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "PHP,Laravelで会員サイト等のサイト・システム作成ができます。MySQLを使用しDBを使用したCRUD機能作成できます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <Php />
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "javascript使用し、DOM操作し画面作成ができます。また、APIを叩きデータの取得、編集、画面表示させることができます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    {" "}
                                    <Javascript />
                                </div>
                            </Tippy>
                        </div>
                        <div css={hydeBlock}></div>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "現在ブログを７年間運用中。静的サイトをwordpress化できます。WEBサイトを構築、テーマ作成、サイトの引っ越し、サーバーアップできます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <Wordpress />
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "vue.js/vue-Cliを用いてプロトタイプのWEBサービスを作ることができます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <Vue />
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "React/Nextを使いプロトタイプのWEBサービスを作れます。redux,toolkit,hooks,typescriptを合わせて使用できます。スタイリングとしてはMaterial-ui,emotion,tailwind-css,styled-componentで実装できます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <ReactJs />
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy
                                animation="perspective"
                                inertia={true}
                                theme={"light"}
                                content={
                                    "Photoshop、Illustratorで簡単な画像作成・編集できます。XD,Figmaを使用し、ワイヤーフレーム・デザインカンプ作成できます。"
                                }
                            >
                                <div style={{ cursor: "pointer" }}>
                                    <Design />
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
