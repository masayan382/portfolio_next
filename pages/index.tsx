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
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Header />
            <main>
                {/* <ParticlesBackground /> */}
                <Slider />
            </main>
            <Footer />
        </div>
    )
}

export default Home
