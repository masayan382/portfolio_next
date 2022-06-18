import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { styled } from "@mui/system"
import { css } from "@mui/styled-engine"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { Header, Footer, Top } from "../layouts/index"
import { Cover, Slider } from "../components/index"
import ParticlesBackground from "../components/ParticlesBackground"

const RedColor = css({
    color: "red",
})

const Welcome = styled("span")({
    color: "lightblue",
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 4,
})

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
            {/* <Cover /> */}
            <Header />

            <div>
                <main>
                    <ParticlesBackground />
                    {/* <Top /> */}
                    <Slider />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Home
