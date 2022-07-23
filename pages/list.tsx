import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { css } from "@mui/styled-engine"
import AppBarArticle from "../components/AppBarArticle"
import FooterArticle from "../components/FooterArticle"
import ScrollToTop from "../components/ScrollToTop"
import Image from "next/image"
import { mq } from "../slides/css"
import Cardbord from "../components/Cardbord"
import React, { useEffect } from "react"
import Link from "next/link"
import cardWorks from "../data/data"
import type { NextPage } from "next"

const contentsBase = css({
    backgroundImage:
        "linear-gradient(120deg, rgba(169, 201, 255, 1), rgba(251, 187, 236, 1))",
    width: "100%",
    height: "100%",
    color: "#333",
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
})

const paperArea = css({
    [mq[0]]: {
        textAlign: "left",
        padding: "24px 16px 64px",
        letterSpacing: "0.05em",
    },
    [mq[2]]: {
        padding: "24px 24px 64px",
    },
})

const imgBox = css({ filter: "drop-shadow(0px 0px 16px rgba(0,0,0,0.6))" })

type cardData = {
    id: string
    category: string
    title: string
    img: string
    overview: string
    date: string
    skill: string
    url?: string
    git?: string
}

type cardList = {
    cards: cardData[]
}

export async function getStaticProps() {
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // const res = await fetch("/data.json")
    // const allData = await res.json()
    return {
        props: {
            cardWorks,
        },
    }
}

const list: React.FC = (data: any) => {
    useEffect(() => {
        return () => {
            console.log(data)
        }
    }, [])
    return (
        <div css={contentsBase}>
            <AppBarArticle />
            <Box
                sx={{
                    flexGrow: 1,
                    margin: "40px auto 0 auto",
                    paddingBottom: 12,
                    maxWidth: "1360px",
                }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Grid item xs={12}>
                        <Paper elevation={3} css={paperArea}>
                            <h2 id="title" style={{ textAlign: "center" }}>
                                <span>WORKS LIST</span>
                            </h2>
                            <section>
                                <h3>DESIGN</h3>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-around",
                                        p: 1,
                                        m: 1,
                                    }}
                                >
                                    {data.cardWorks.map(
                                        (cardWork: any, index: number) => {
                                            return (
                                                <>
                                                    {cardWork.category ===
                                                    "design" ? (
                                                        <Grid>
                                                            <Cardbord
                                                                key={index}
                                                                title={
                                                                    cardWork.title
                                                                }
                                                                img={
                                                                    cardWork.img
                                                                }
                                                                overview={
                                                                    cardWork.overview
                                                                }
                                                                date={
                                                                    cardWork.date
                                                                }
                                                                skill={
                                                                    cardWork.skill
                                                                }
                                                                url={
                                                                    cardWork.url
                                                                }
                                                                git={
                                                                    cardWork.git
                                                                }
                                                            />
                                                        </Grid>
                                                    ) : (
                                                        ""
                                                    )}
                                                </>
                                            )
                                        }
                                    )}
                                </Box>
                            </section>

                            <section>
                                <h3>WEB SITE</h3>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-around",
                                        p: 1,
                                        m: 1,
                                    }}
                                >
                                    {data.cardWorks.map(
                                        (cardWork: any, index: number) => {
                                            return (
                                                <>
                                                    {cardWork.category ===
                                                    "site" ? (
                                                        <Grid>
                                                            <Cardbord
                                                                key={index}
                                                                title={
                                                                    cardWork.title
                                                                }
                                                                img={
                                                                    cardWork.img
                                                                }
                                                                overview={
                                                                    cardWork.overview
                                                                }
                                                                date={
                                                                    cardWork.date
                                                                }
                                                                skill={
                                                                    cardWork.skill
                                                                }
                                                                url={
                                                                    cardWork.url
                                                                }
                                                                git={
                                                                    cardWork.git
                                                                }
                                                            />
                                                        </Grid>
                                                    ) : (
                                                        ""
                                                    )}
                                                </>
                                            )
                                        }
                                    )}
                                </Box>
                            </section>

                            <section>
                                <h3>PROTOTYPE</h3>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-around",
                                        p: 1,
                                        m: 1,
                                    }}
                                >
                                    {data.cardWorks.map(
                                        (cardWork: any, index: number) => {
                                            return (
                                                <>
                                                    {cardWork.category ===
                                                    "prototype" ? (
                                                        <Grid>
                                                            <Cardbord
                                                                key={index}
                                                                title={
                                                                    cardWork.title
                                                                }
                                                                img={
                                                                    cardWork.img
                                                                }
                                                                overview={
                                                                    cardWork.overview
                                                                }
                                                                date={
                                                                    cardWork.date
                                                                }
                                                                skill={
                                                                    cardWork.skill
                                                                }
                                                                url={
                                                                    cardWork.url
                                                                }
                                                                git={
                                                                    cardWork.git
                                                                }
                                                            />
                                                        </Grid>
                                                    ) : (
                                                        ""
                                                    )}
                                                </>
                                            )
                                        }
                                    )}
                                </Box>
                            </section>

                            <section>
                                <h3>FRAMEWORK</h3>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-around",
                                        p: 1,
                                        m: 1,
                                    }}
                                >
                                    {data.cardWorks.map(
                                        (cardWork: any, index: number) => {
                                            return (
                                                <>
                                                    {cardWork.category ===
                                                    "framework" ? (
                                                        <Grid>
                                                            <Cardbord
                                                                key={index}
                                                                title={
                                                                    cardWork.title
                                                                }
                                                                img={
                                                                    cardWork.img
                                                                }
                                                                overview={
                                                                    cardWork.overview
                                                                }
                                                                date={
                                                                    cardWork.date
                                                                }
                                                                skill={
                                                                    cardWork.skill
                                                                }
                                                                url={
                                                                    cardWork.url
                                                                }
                                                                git={
                                                                    cardWork.git
                                                                }
                                                            />
                                                        </Grid>
                                                    ) : (
                                                        ""
                                                    )}
                                                </>
                                            )
                                        }
                                    )}
                                </Box>
                            </section>

                            {/* <h3>WEB SITE</h3>
                            <Cardbord />
                            <h3>PROTOTYPE</h3>
                            <Cardbord />
                            <h3>FRAMEWORK</h3>
                            <Cardbord /> */}
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
