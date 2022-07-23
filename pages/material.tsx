import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { css } from "@mui/styled-engine"
import AppBarArticle from "../components/AppBarArticle"
import FooterArticle from "../components/FooterArticle"
import ScrollToTop from "../components/ScrollToTop"
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
                            elevation={3}
                            //
                            css={paperArea}
                        >
                            <h2 id="title" style={{ textAlign: "center" }}>
                                <span>【Material】のWEBサイト制作について</span>
                            </h2>
                            <h3>
                                <span>仮想案件</span>
                            </h3>
                            <p>内容：WEBサイトデザイン制作</p>
                            <p>
                                目的：WEBサイトを見た人に会社の印象を持たせる。問い合わせの数を増やす。
                            </p>
                            <h3>
                                <span>ヒアリング内容</span>
                            </h3>
                            <ol>
                                <li>
                                    ITエンジニアリング企業として他の会社との差別化が図れるHPにしたい。
                                </li>
                                <li>
                                    デザインが弱いため現在のHPを刷新していただきたい
                                </li>
                                <li>
                                    内々の話で、うちの会社もいいところまで名前が残るが最後に残らない。実力は他社に負けていないと思っている。
                                </li>
                                <li>
                                    クライアントやエンジニアにうちの会社名、ロゴなど覚えてもらいたい。うちのコンセプトを好きだといってもらいたい。
                                </li>
                                <li>
                                    今までのデザインがパットしない。アピールするためであれば多少の動きは取り入れたいがやりすぎは避けたい。
                                </li>
                                <li>
                                    エンジニアからの問い合わせがないため、エンジニアも興味が持てる、応募してみたい、問い合わせたいと思えるデザインにしたい
                                </li>
                            </ol>
                            <p>
                                上記、クライアントへ確認し得られた情報とする。
                            </p>
                            <h3>
                                <span>提案書</span>
                            </h3>
                            <strong>
                                結論：会社名+ロゴ+雰囲気をイメージ・記憶しやすくし、他社と差別化を図る
                            </strong>
                            <p>
                                ポイント：ロゴという会社の看板をベースにしたデザインへ変更
                            </p>
                            <h3>
                                <span>背景/目的</span>
                            </h3>
                            <ul>
                                <li>
                                    他社に埋もれてしまい、最後の一社に残れない。
                                </li>
                                <li>
                                    競合との実力差というものはなく、アピールがしきれていない。印象が控え目なため、アピール度の高い会社と並ぶと負けてしまう。
                                </li>
                                <li>
                                    アピールできている会社にエンジニアが集中し応募されない。エンジニアが確保できない。
                                </li>
                                <li>
                                    「受注・エンジニアの確保」において他社に負けてしまう。{" "}
                                </li>
                            </ul>
                            <h3>
                                <span>ターゲット/ターゲットの事情</span>
                            </h3>
                            <p>
                                企業：プロジェクトに対して足りないマンパワーを埋めたい。ちゃんと作業内容はコミットできるような人材を使いたい。いい人材なら長期で契約したい。
                            </p>
                            <p>
                                エンジニア：いい会社に入りたい。SESで客先常住するなら大切に扱ってくれるようないい現場に行きたい。働くだけでなく成長できるような会社にいきたい。
                            </p>
                            <h3>
                                <span>市場背景の整理</span>
                            </h3>
                            <h4>想定した市場背景</h4>
                            <ul>
                                <li>従来言われていたエンジニア不足。</li>
                                <li>
                                    コロナによるリモートワークベースへのシフト。
                                </li>
                                <li>
                                    不況に伴うプロジェクトの中止、延期、縮小などがありマンパワーを減らす、増やすなど適宜調整が必要な状況。
                                </li>
                                <li>
                                    常勤者を減らし、足りないマンパワーを補いたい。（いつでも切れる人間だと会社としてはありがたい）
                                </li>
                                <li>ITエンジニアリングの需要は高い。</li>
                            </ul>
                            <h4>想定した他社サイト（市場調査）</h4>
                            <ul>
                                <li>
                                    <a href="https://gohako.jp/">
                                        https://gohako.jp/
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.aura-office.co.jp/">
                                        https://www.aura-office.co.jp/
                                    </a>
                                </li>
                                <li>
                                    <a href="https://meetsmore.com/services/lp-development">
                                        https://meetsmore.com/services/lp-development
                                    </a>
                                </li>
                                <li>
                                    <a href="https://miraie-group.jp/">
                                        https://miraie-group.jp/
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.fusionia.jp/">
                                        https://www.fusionia.jp/
                                    </a>
                                </li>
                            </ul>
                            <h3>
                                <span>求められている/ニーズ</span>
                            </h3>
                            <ul>
                                <li>
                                    プロジェクトのフェーズによってその都度必要な人材を配置したいのでいいエンジニアを貸してほしい。
                                </li>
                                <li>
                                    数あるいくつもの状況にも対応できるだけの実力あるエンジニアや、専門的にこなせるエンジニアを確保したい。
                                </li>
                                <li>いろいろな現場を見てまわりたい。</li>
                                <li>現場でエンジニアとして成長したい</li>
                                <li>
                                    現場のエンジニアの病休、産休などのイベントでの欠員を緊急で埋めたい
                                </li>
                            </ul>
                            <h3>
                                <span>具体的戦略</span>
                            </h3>
                            <ol>
                                <li>
                                    HPを通して、ロゴ、会社名を印象付け、アピールする。「あの会社良さそうだな」と感じさせる
                                </li>
                                <li>
                                    WEBページを一瞬見ただけで内容がイメージできるようにする
                                </li>
                                <li>
                                    目標は「三角の水色のところの会社」とイメージできるレベル。（可能なら到達目標は会社名まで覚えさせる）
                                </li>
                            </ol>

                            <p>
                                ポイント：デザインはロゴを参考に斜線を多く多用。カラーは白黒+青のグラデーション。
                            </p>
                            <ul>
                                <li>斜線自体はロゴとの親和性は〇</li>
                                <li>斜線の使用は他社では見られず、目立てる</li>
                                <li>
                                    斜線によるメリットとして静的に「躍動感」が出せる
                                </li>
                                <li>
                                    斜線によるデメリットとして不安定感が出る（動くぶん、不安定になる。シンメトリーのような直線であれば「安定感」が出るが「躍動感」は出せない）
                                </li>
                                <li>
                                    斜線のデメリットを消すために色で安定感・安心感を演出する
                                </li>
                                <li>
                                    メインカラーは「青」とした。青のイメージはクール、まじめ、おちつき、知性、信頼、誠実、冷たい、空、海
                                </li>
                                <li>
                                    「青」は御社のコンセプトとも意味合い的にもマッチしていると判断。「赤×斜線」だと危険な動きをされそうになるが「青×斜線」なら真面目に動くイメージが出せる
                                </li>
                                <li>
                                    また、青のネガティブなイメージとしては冷酷や冷たいという印象もなくはないため、そこは青をグラデーションで使用し、空や海といった広大で清々しいイメージにさりげなく誘導する
                                </li>
                                <li>
                                    最終的に「斜線+青グラデーション」でまじめに動くというイメージをユーザーに印象付ける
                                </li>
                                <li>
                                    この会社にエントリーするか迷うエンジニアであれば最後までページを見るはずなので後半は技術ブログで学べる場であること、会社ブログで楽しそうな会社であること、ニュースで業界の最新の情報が得られる場であることを知ってもらう。（離脱率を考慮し、離脱せず後半ページまでスクロールする悩む対象者へのダメ押し材料とする）
                                </li>
                                <li>
                                    コンバージョンボタンとして問い合わせボタンを設置。横には笑顔の女性を配置し、アクションのハードルを下げられるよう演出した
                                </li>
                            </ul>

                            <h3>
                                <span>デザインカンプ</span>
                            </h3>
                            <p>■PCデザイン■</p>
                            <div style={{ textAlign: "center" }}>
                                <div css={imgBox}>
                                    <Image
                                        src="/design/Material_pc.jpg"
                                        alt=""
                                        width={1140}
                                        height={8805}
                                    />
                                </div>
                            </div>

                            <p>■TABデザイン■</p>
                            <div style={{ textAlign: "center" }}>
                                <div css={imgBox}>
                                    <Image
                                        src="/design/Material_tab.jpg"
                                        alt=""
                                        width={768}
                                        height={12539}
                                    />
                                </div>
                            </div>
                            <p>■SPデザイン■</p>
                            <div style={{ textAlign: "center" }}>
                                <div css={imgBox}>
                                    <Image
                                        src="/design/Material_sp.jpg"
                                        alt=""
                                        width={375}
                                        height={9370}
                                    />
                                </div>
                            </div>
                            <h3>
                                <span>おわりに</span>
                            </h3>
                            <p>
                                上記の内容で、仮想案件としてWEBサイトデザインを行いました。メインビジュアルに会社の様子を楽しそうに映した動画があるとさらに印象もよくできると思います。また、コーディングの際にはもう少しサイト上でホバーなどのスクロールに合わせたアニメーションも実装できるとさらに良い印象も持たせられるかと考えます。最後までご覧いただきありがとうございました。
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <FooterArticle />
            <ScrollToTop />
        </div>
    )
}

export default list
