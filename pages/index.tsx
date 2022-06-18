import type { NextPage } from "next"
import Head from "next/head"
import { css } from "@mui/styled-engine"
import { Header, Footer } from "../layouts/index"
import { Slider } from "../layouts/index"
import ParticlesBackground from "../components/ParticlesBackground"

const contentArea = css({
    position: "relative",
})

const Home: NextPage = () => {
    return (
        <div css={contentArea}>
            <Head>
                <title>Portfolio</title>
                <meta name="Portfolio" content="made by T.M" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <main>
                <ParticlesBackground />
                <Slider />
            </main>
            <Footer />
        </div>
    )
}

export default Home
