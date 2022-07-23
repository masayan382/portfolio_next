import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { css } from "@mui/styled-engine"
import AppBarArticle from "../components/AppBarArticle"
import FooterArticle from "../components/FooterArticle"
import ReturnTopButton from "../components/ReturnTopButton"
import Image from "next/image"
import { mq } from "../slides/css"

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
                                <span>「KOMAME」について</span>
                            </h2>
                            <h3>
                                <span>仮想案件</span>
                            </h3>
                            <p>
                                内容：コーヒー豆定期購入アプリ「KOMAME」のLP制作
                            </p>
                            <p>
                                目的：LPを見たユーザーがアプリをダウンロードする
                            </p>
                            <h3>
                                <span>ヒアリング内容</span>
                            </h3>
                            <ol>
                                <li>ダウンロード数が増やすことが最大の目的</li>
                                <li>
                                    ターゲット層は30代以上の男女。コーヒー豆を挽いてコーヒーを飲むのが習慣の人物。アプリを使いコーヒー豆を買うことに抵抗がない。むしろ、時短になって効率が良いと思うような人物。または、手軽にコーヒー豆が手に入るから自分でドリップしてコーヒーを淹れる過程を楽しみたいという新規ユーザー。
                                </li>
                                <li>
                                    高級家電というわけではないので、じっくり考えてダウンロードではなく、パッと目に留まって、一回使ってみて気に入ったから使っているという状態が望ましい。まずは１回使ってほしい。
                                </li>
                                <li>
                                    テーマカラーの指定はなし。コーヒーぽい感じ。色使いはおまかせ。シンプルにオシャレな感じ？ターゲット層が30代から50代の男女（メインは30-40代かも）。どの年代の人がみても抵抗がなければ良い。30代は気に入るが40代は嫌がるようなものは避けてほしい。
                                </li>
                                <li>
                                    競合は大手ECサイトのA社やR社。うちのウリはアプリで発注や現在の発注状況、発送状態、そろそろ発注では？の通知など。スマホで完結するところ。
                                </li>
                                <li>
                                    LPに関してはタブレット画面はスマホ画面と共同でよい。
                                </li>
                            </ol>
                            <p>
                                上記、クライアントへ確認し得られた情報とする。
                            </p>
                            <h3>
                                <span>提案書</span>
                            </h3>
                            <strong>
                                <span>
                                    結論：「便利でリスクがないから使いましょう」という内容で訴求する。
                                </span>
                            </strong>
                            <p>
                                KOMAMEを使うにあたり「障害となるものは無く、メリットしかない」とユーザーの物差しで判断してもらうことでダウンロードにつなげる。
                            </p>
                            <h3>
                                <span>背景/目的</span>
                            </h3>
                            <p>
                                現状ECサイトからコーヒー豆の定期便を買うにあたり不便なところは、次の買うタイミングの通知はないので本人が判断。余っていても次が届く。違う豆を購入する際は今の豆を削除し新しい豆を選んで買って再設定が必要。
                            </p>
                            <p>
                                アプリであれば豆はスマホから選ぶだけ。決済方法は変更がなければ変える必要もなし。通知があることで身近な存在になれる。
                            </p>
                            <h3>
                                <span>ターゲット/ターゲットの事情</span>
                            </h3>
                            <p>
                                ターゲット層が30代から50代の男女（コア層は30-40代かも）とのことだったが、もっと詳細に挙げると下記を想定。
                            </p>
                            <ol>
                                <li>コーヒーを豆から入れる習慣がある人</li>
                                <li>コンビニコーヒーで満足できない人</li>
                                <li>
                                    好きなコーヒーの味がある人（コーヒーならなんでもいいわけではない）
                                </li>
                                <li>
                                    これから本格的にコーヒーを淹れてみたい人
                                </li>
                                <li>
                                    コーヒーを豆から入れることに酔っている人（SNSで目立ちたい人？コーヒーを入れる所作や過程で飲む以外の効果を狙う人？）
                                </li>
                            </ol>
                            <p>
                                以上の点から、コーヒーが好きな人が豆からコーヒーを淹れるわけだが、アプリで豆を買う人は時間を買いたい人。
                            </p>
                            <p>
                                つまり、コーヒーがおいしいのは前提。便利で手間が省けて、豆の保証も付いていることでこのサービスを使う価値があると思わせる必要がある。
                            </p>
                            <h3>
                                <span>市場背景の整理</span>
                            </h3>
                            <p>現在の主なコーヒー豆の買い方</p>
                            <ol>
                                <li>焙煎屋から直購入（店舗or通販）</li>
                                <li>カフェで直購入</li>
                                <li>ECサイトで定期購入</li>
                            </ol>
                            <p>
                                あくまでも基本はユーザーが豆を買うと決意してアクションを起こして購入に至るケースが主流。
                            </p>
                            <h3>
                                <span>求められている/ニーズ</span>
                            </h3>
                            <p>
                                上にあるように豆の購入はユーザーが自主的に買うことが前提。そのためアプリ側から豆の購入や通知など能動的にユーザーにアプローチすることでユーザーの負担が減り、便利であると感じることができる。
                            </p>
                            <p>
                                通知きたけど、もう豆がなくなるころだっけ？新しい豆が入った？この豆売れてますランキング？などの情報が待ってるだけで届き、ユーザーが受け身でいられる。
                            </p>
                            <h3>
                                <span>具体的戦略</span>
                            </h3>
                            <ol>
                                <li>
                                    KOMAMEがどういうサービスかわかりやすくシンプルに説明。
                                </li>
                                <li>メリットの訴求</li>
                                <li>デメリットが少ないことを明記</li>
                            </ol>
                            <p>
                                ページの離脱率を考慮し上から優先順位の高い内容から説明。離脱せず、使うことに踏み切れず画面をスクロースするユーザーにデメリットがないことを最後に説明し、「総合的に判断しメリットが多いからダウンロードする」という方向へと誘導する。
                            </p>
                            <h3>
                                <span>デザインカンプ</span>
                            </h3>
                            <p>■PCデザイン■</p>
                            <div style={{ textAlign: "center" }}>
                                <div css={imgBox}>
                                    <Image
                                        src="/design/KOMAME_pc.jpg"
                                        alt=""
                                        width={1280}
                                        height={4357}
                                    />
                                </div>
                            </div>

                            <p>■SPデザイン■</p>
                            <div style={{ textAlign: "center" }}>
                                <div css={imgBox}>
                                    <Image
                                        src="/design/KOMAME_sp.jpg"
                                        alt=""
                                        width={375}
                                        height={6606}
                                    />
                                </div>
                            </div>
                            <h3>
                                <span>おわりに</span>
                            </h3>
                            <p>
                                上記の内容で、仮想案件としてLPデザイン制作を行いました。アプリをダウンロードすることを考慮し、SP画面で見られることが多いことを想定。画面は見やすく、シンプルに、長すぎないということを意識しました。最後までご覧いただきありがとうございました。
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <ReturnTopButton />
            <FooterArticle />
        </div>
    )
}

export default list
