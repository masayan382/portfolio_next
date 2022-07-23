import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { css } from "@mui/styled-engine"
import AppBarArticle from "../components/AppBarArticle"
import FooterArticle from "../components/FooterArticle"
import ReturnTopButton from "../components/ReturnTopButton"
import Image from "next/image"
import { mq } from "../slides/css"
import WorkListBack from "../components/WorkListBack"

const contentsBase = css({
    backgroundImage:
        "linear-gradient(135deg, rgba(169, 201, 255, 1), rgba(251, 187, 236, 1))",
    width: "100%",
    height: "100%",
    color: "#333",
    " img": {
        objectFit: "cover",
    },
    " ol": {
        counterReset: "counter",
        [mq[0]]: {
            paddingLeft: "4px",
        },
        [mq[2]]: {
            addingLeft: "16px",
        },
        " li": {
            listStyleType: "none",
            fontSize: "14px",
            lineHeight: "1.8",
            marginBottom: "8px",
            paddingLeft: "30px",
            position: "relative",
            "&:before": {
                content: "counter(counter)",
                counterIncrement: "counter",
                backgroundImage:
                    "linear-gradient(135deg, rgba(169, 201, 255, 1), rgba(251, 187, 236, 1))",
                border: "none",
                borderRadius: "50%",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "22px",
                width: "22px",
                color: "#333",
                fontSize: "100%",
                lineHeight: "1",
                position: "absolute",
                top: "0",
                left: "0",
            },
        },
    },
    h2: {
        " span": {
            position: "relative",
            [mq[0]]: {
                display: "block",
            },
            [mq[2]]: {
                display: "inline-block",
            },
            "&:after": {
                [mq[0]]: {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    bottom: "-16%",
                    width: "100%",
                    height: "6px",
                    background:
                        "linear-gradient(135deg, rgba(169, 201, 255, 1), rgba(251, 187, 236, 1))",
                },
                [mq[2]]: {
                    left: "-2%",
                    width: "108%",
                },
            },
        },
    },

    h3: {
        margin: "28px 0",
        " span": {
            position: "relative",
            color: "white",
            background: "#333",
            lineHeight: "1.4",
            padding: "0.5em 0.5em 0.5em 1.8em",
            borderRadius: "2px",
            "&:before": {
                content: "url(/design/check.png)",
                width: "28px",
                height: "28px",
                position: "absolute",
                top: "0",
                left: "0",
                transform: "scale(0.3)",
            },
        },
    },
})

const paperArea = css({
    [mq[0]]: {
        textAlign: "left",
        padding: "24px 16px 64px",
        letterSpacing: "0.05em",
    },
    [mq[2]]: {
        padding: "24px 40px 64px",
    },
})

const imgBox = css({ filter: "drop-shadow(0px 0px 16px rgba(0,0,0,0.6))" })

const list = () => {
    return (
        <div css={contentsBase}>
            <AppBarArticle />
            <Box
                sx={{
                    flexGrow: 1,
                    margin: "40px auto 0 auto",
                    paddingBottom: 12,
                    maxWidth: "1280px",
                }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Grid item xs={10}>
                        <Paper
                            elevation={0}
                            //
                            css={paperArea}
                        >
                            <h2 id="title" style={{ textAlign: "center" }}>
                                <span>
                                    フォトスタジオのWEBサイトトップページのデザイン
                                </span>
                            </h2>
                            <h3>
                                <span>仮想案件</span>
                            </h3>
                            <p>内容：WEBサイトデザイン制作</p>
                            <p>
                                目的：WEBサイトを見た人にここで写真を撮りたいと思わせる。予約数を増やす。
                            </p>
                            <h3>
                                <span>ヒアリング内容</span>
                            </h3>
                            <ul>
                                <li>
                                    多くの人にウチのスタジオで写真を撮ってもらいたい
                                </li>
                                <li>
                                    外出ができないぶん、こういった形で思い出を形にしてもらいたい
                                </li>
                                <li>
                                    写真であれば遠方の家族ともシェアしたときに喜びもシェアできる
                                </li>
                                <li>
                                    いい写真の素材は山のようにあるので存分に使ってほしい
                                </li>
                                <li>多くの年代の人に届いてほしい</li>
                            </ul>
                            <p>
                                上記、クライアントへ確認し得られた情報とする。
                            </p>
                            <h3>
                                <span>提案書</span>
                            </h3>
                            <strong>
                                結論：写真で素敵な思い出を残し、ここで写真を撮りたいという感情を湧かせる
                            </strong>
                            <p>
                                ポイント：綺麗な写真を使ってこういうふうに写真を残したいと思わせる
                            </p>

                            <h3>
                                <span>背景/目的</span>
                            </h3>
                            <ul>
                                <li>
                                    自粛期間の延長に伴い外出できず思い出を作ることができない。スタジオで楽しい時間がこの日あったよねと思いでを残せる。
                                </li>
                                <li>
                                    SNSの隆盛によりいい写真をたくさんの人に見てもらい承認してもらいたいという承認欲求を満たしたい人が多い。
                                </li>
                                <li>
                                    遠方の家族ともインターネットで繋がれる時代にもなった。
                                </li>
                            </ul>
                            <h3>
                                <span>ターゲット/ターゲットの事情</span>
                            </h3>
                            <ul>
                                <li>コア層は子供のいる親。</li>
                                <li>ネットに自分の画像を上げたい人</li>
                                <li>遠方の家族に写真を送りたい人</li>
                            </ul>
                            <p>
                                基本は子供から高齢者まで全年代。比率は女性が多くなるか。
                            </p>
                            <h3>
                                <span>市場背景の整理</span>
                            </h3>
                            <ul>
                                <li>
                                    自粛期間により外出できず、子供と思い出に残すものがない。
                                </li>
                                <li>外出しないのでネット時間が増えた</li>
                                <li>
                                    ネットに写真を上げることに抵抗がない人が増えた。
                                </li>
                                <li>
                                    一人っ子も増え、一人の子にお金をかける人が多くなった
                                </li>
                                <li>
                                    コスプレ写真など衣装を着て非現実を味わうことの認知度・受容度が上がり、抵抗感が下がっている。
                                </li>
                                <li>
                                    いい写真にいいねをしてもらいたい若者が多くなった
                                </li>
                                <li>
                                    スマホの普及により写真を撮ることが昔と比べても身近な存在となっている
                                </li>
                            </ul>
                            <h3>
                                <span>求められている/ニーズ</span>
                            </h3>
                            <ul>
                                <li>綺麗な写真が撮れる</li>
                                <li>衣装をきて非日常の写真も撮れる</li>
                                <li>
                                    家族の思い出を残したい（データでもプリントでも）
                                </li>
                            </ul>
                            <h3>
                                <span>具体的戦略</span>
                            </h3>
                            <ol>
                                <li>
                                    綺麗な写真を多用し、こんな写真を撮りたいと思わせる
                                </li>
                                <li>
                                    背景やブロックから写真をずらし写真が印象的に見えるようレイアウトする
                                </li>
                                <li>
                                    色は白黒灰色と基本をシックにし、写真の色をアクセントとする
                                </li>
                                <li>
                                    子供が絵になるためベースとするが、大人も撮れることをアピールする
                                </li>
                                <li>
                                    写真を撮るだけでなく、ポストカードやポスターなどデータ以外にも転用できるオーソドックススタイルもあることで幅を持たせる
                                </li>
                            </ol>
                            <h3>
                                <span>デザインカンプ</span>
                            </h3>
                            <p>■PCデザイン■</p>
                            <div style={{ textAlign: "center" }}>
                                <div css={imgBox}>
                                    <Image
                                        src="/design/memorial_pc.jpg"
                                        alt=""
                                        width={1440}
                                        height={14687}
                                    />
                                </div>
                            </div>

                            <p>■SPデザイン■</p>
                            <div style={{ textAlign: "center" }}>
                                <div css={imgBox}>
                                    <Image
                                        src="/design/memorial_sp.jpg"
                                        alt=""
                                        width={375}
                                        height={9497}
                                    />
                                </div>
                            </div>
                            <h3>
                                <span>おわりに</span>
                            </h3>
                            <p>
                                上記の内容で、仮想案件としてWEBサイトデザインを行いました。キレイな写真を使い、こういうところで家族写真を撮りたいと思って、問い合わせがあるといいなと願い制作しました。XDのプロトタイプ機能を試験的に導入し、スライダーやSP画面のメニューなどトライして作成できました。（トップページGIF参照）。最後までご覧いただきありがとうございました。
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
                <WorkListBack />
            </Box>
            <ReturnTopButton />
            <FooterArticle />
        </div>
    )
}

export default list
