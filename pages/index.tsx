import type { NextPage } from "next"
import Head from "next/head"
import { css } from "@mui/styled-engine"
import { Header, Footer } from "../layouts/index"
import { Slider } from "../layouts/index"

const contentArea = css({
    position: "relative",
})

const Home: NextPage = () => {
    return (
        <div css={contentArea}>
            <Head>
                <title>Portfolio</title>
                <meta name="Portfolio" content="T·MのPortfolioサイトです" />
            </Head>
            <Header />
            <main>
                <Slider />
            </main>
            <Footer />
        </div>
    )
}

export default Home
