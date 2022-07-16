import React from "react"
import { Header, Footer } from "../layouts/index"
// import { makeStyles } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { css } from "@mui/styled-engine"
import AppBarArticle from "../components/AppBarArticle"
import FooterArticle from "../components/FooterArticle"
import ScrollToTop from "../components/ScrollToTop"

const contentsBase = css({
    // background: "red",
    // margin: "56px 0",
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
            <AppBarArticle />
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Grid item xs={11}>
                        <h2 id="title">KOMAME</h2>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={11}>
                        仮想案件
                        新規サービス・コーヒー豆定期購入アプリ「KOMAME」について
                        内容：KOMAMEのLP制作
                        目的：LPを見たユーザーがアプリをダウンロードする
                        ヒアリング内容 ダウンロード数が増やすことが最大の目的
                        ターゲット層は30代以上の男女。コーヒー豆を挽いてコーヒーを飲むのが習慣の人物。アプリを使いコーヒー豆を買うことに抵抗がない。むしろ、時短になって効率が良いと思うような人物。または、手軽にコーヒー豆が手に入るから自分でドリップしてコーヒーを淹れる過程を楽しみたいという新規ユーザー。
                        高級家電というわけではないので、じっくり考えてダウンロードではなく、パッと目に留まって、一回使ってみて気に入ったから使っているという状態が望ましい。まずは１回使ってほしい。
                        テーマカラーの指定はなし。コーヒーぽい感じ。色使いはおまかせ。シンプルにオシャレな感じ？ターゲット層が30代から50代の男女（メインは30-40代かも）。どの年代の人がみても抵抗がなければ良い。30代は気に入るが40代は嫌がるようなものは避けてほしい。
                        競合は大手ECサイトのA社やR社。うちのウリはアプリで発注や現在の発注状況、発送状態、そろそろ発注では？の通知など。スマホで完結するところ。
                        LPに関してはタブレット画面はスマホ画面と共同でよい。
                        上記、クライアントへ確認し得られた情報とする。 提案書
                        結論：「便利でリスクがないから使いましょう」という内容で訴求する。
                        KOMAMEを使うにあたり「障害となるものは無く、メリットしかない」とユーザーの物差しで判断してもらうことでダウンロードにつなげる。
                        背景/目的
                        現状ECサイトからコーヒー豆の定期便を買うにあたり不便なところは、次の買うタイミングの通知はないので本人が判断。余っていても次が届く。違う豆を購入する際は今の豆を削除し新しい豆を選んで買って再設定が必要。
                        アプリであれば豆はスマホから選ぶだけ。決済方法は変更がなければ変える必要もなし。通知があることで身近な存在になれる。
                        ターゲット/ターゲットの事情
                        ターゲット層が30代から50代の男女（コア層は30-40代かも）とのことだったが、もっと詳細に挙げると下記を想定。
                        コーヒーを豆から入れる習慣がある人
                        コンビニコーヒーで満足できない人
                        好きなコーヒーの味がある人（コーヒーならなんでもいいわけではない）
                        これから本格的にコーヒーを淹れてみたい人
                        コーヒーを豆から入れることに酔っている人（SNSで目立ちたい人？コーヒーを入れる所作や過程で飲む以外の効果を狙う人？）
                        以上の点から、コーヒーが好きな人が豆からコーヒーを淹れるわけだが、アプリで豆を買う人は時間を買いたい人。
                        つまり、コーヒーがおいしいのは前提。便利で手間が省けて、豆の保証も付いていることでこのサービスを使う価値があると思わせる必要がある。
                        市場背景の整理 現在の主なコーヒー豆の買い方
                        焙煎屋から直購入（店舗or通販） カフェで直購入
                        ECサイトで定期購入
                        あくまでも基本はユーザーが豆を買うと決意してアクションを起こして購入に至るケースが主流。
                        求められている/ニーズ
                        上にあるように豆の購入はユーザーが自主的に買うことが前提。そのためアプリ側から豆の購入や通知など能動的にユーザーにアプローチすることでユーザーの負担が減り、便利であると感じることができる。
                        通知きたけど、もう豆がなくなるころだっけ？新しい豆が入った？この豆売れてますランキング？などの情報が待ってるだけで届き、ユーザーが受け身でいられる。
                        具体的戦略
                        KOMAMEがどういうサービスかわかりやすくシンプルに説明。
                        メリットの訴求 デメリットが少ないことを明記
                        ページの離脱率を考慮し上から優先順位の高い内容から説明。離脱せず、使うことに踏み切れず画面をスクロースするユーザーにデメリットがないことを最後に説明し、「総合的に判断しメリットが多いからダウンロードする」という方向へと誘導する。
                        デザインカンプ ＜PC＞ KOMAME ＜SP＞ KOMAME おわりに
                        上記の内容で、仮想案件としてLPデザイン制作を行いました。アプリをダウンロードすることを考慮し、SP画面で見られることが多いことを想定。画面は見やすく、シンプルに、長すぎないということを意識しました。
                        最後までご覧いただきありがとうございました。
                    </Grid>
                </Grid>
            </Box>
            <ScrollToTop />
            <FooterArticle />
        </div>
    )
}

export default list
