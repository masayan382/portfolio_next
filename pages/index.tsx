import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { styled } from "@mui/system"
import { css } from "@mui/styled-engine"
import { AppBar, Toolbar, Typography } from "@mui/material"
import { Header, Footer } from "../layouts/index"
import { Cover } from "../components/index"

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
    minHeight: "100vh",
    position: "relative",
    paddingBottom: "60px",
    boxSizing: "border-box",
})

const Home: NextPage = () => {
    return (
        <div css={contentArea}>
            <Head>
                <title>Portfolio</title>
                <meta name="Portfolio" content="made by T.M" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Cover />
            <Header />

            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="https://nextjs.org">Next.js!</a>
                    </h1>

                    <p className={styles.description}>
                        <span css={RedColor}>Get started by editing</span>{" "}
                        <code className={styles.code}>pages/index.tsx</code>
                    </p>

                    <div className={styles.grid}>
                        <a
                            href="https://nextjs.org/docs"
                            className={styles.card}
                        >
                            <h2>Documentation &rarr;</h2>
                            <p>
                                Find in-depth information about Next.js features
                                and API.
                            </p>
                        </a>

                        <a
                            href="https://nextjs.org/learn"
                            className={styles.card}
                        >
                            <h2>Learn &rarr;</h2>
                            <p>
                                Learn about Next.js in an interactive course
                                with quizzes!
                            </p>
                        </a>

                        <a
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                            className={styles.card}
                        >
                            <h2>Examples &rarr;</h2>
                            <p>
                                Discover and deploy boilerplate example Next.js
                                projects.
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            className={styles.card}
                        >
                            <h2>Deploy &rarr;</h2>
                            <p>
                                Instantly deploy your Next.js site to a public
                                URL with Vercel.
                            </p>
                        </a>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Home
