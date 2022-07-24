import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { css } from "@mui/styled-engine"
import AppBarArticle from "../components/AppBarArticle"
import FooterArticle from "../components/FooterArticle"
import { mq } from "../slides/css"
import Cardbord from "../components/Cardbord"
import React, { memo } from "react"
import cardWorks from "../data/data"
import ReturnTopButton from "../components/ReturnTopButton"
import Head from "next/head"

const contentsBase = css({
    backgroundImage:
        "linear-gradient(120deg, rgba(169, 201, 255, 1), rgba(251, 187, 236, 1))",
    width: "100%",
    height: "100%",
    color: "#333",
    h2: {
        fontSize: "32px",
        marginBottom: "68px",
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
                    backgroundImage:
                        "linear-gradient(120deg, rgba(169, 201, 255, 1), rgba(251, 187, 236, 1))",
                },
                [mq[2]]: {
                    left: "-2%",
                    width: "108%",
                },
            },
        },
    },
    h3: {
        fontSize: "24px",
        margin: "32px auto 24px",
        textAlign: "center",
        " span": {
            display: "inline-block",
            padding: "0 55px",
            position: "relative",
            "&:before,&:after": {
                content: "''",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                display: "inline-block",
                width: "56px",
                height: "2px",
                backgroundColor: "#212121",
            },
            "&:before": {
                left: "-16px",
            },
            "&:after": {
                right: "-16px",
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
    const allData = data
    const designData = allData.cardWorks.filter(function (data: any) {
        return data.category == "design"
    })
    const siteData = allData.cardWorks.filter(function (data: any) {
        return data.category == "site"
    })
    const prototypeData = allData.cardWorks.filter(function (data: any) {
        return data.category == "prototype"
    })
    const frameworkData = allData.cardWorks.filter(function (data: any) {
        return data.category == "framework"
    })
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="Portfolio"
                    content="T·MのPortfolioサイトのWORKS LISTです"
                />
            </Head>
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
                            <Paper elevation={0} css={paperArea}>
                                <h2 id="title" style={{ textAlign: "center" }}>
                                    <span>WORKS LIST</span>
                                </h2>

                                <section>
                                    <h3>
                                        <span>DESIGN</span>
                                    </h3>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "space-around",
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        {designData.map(
                                            (dData: any, index: number) => {
                                                return (
                                                    <Grid key={index}>
                                                        <Cardbord
                                                            title={dData.title}
                                                            img={dData.img}
                                                            overview={
                                                                dData.overview
                                                            }
                                                            date={dData.date}
                                                            skill={dData.skill}
                                                            url={dData.url}
                                                            git={dData.git}
                                                        />
                                                    </Grid>
                                                )
                                            }
                                        )}
                                    </Box>
                                </section>

                                <section>
                                    <h3>
                                        <span>WEB SITE</span>
                                    </h3>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "space-around",
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        {siteData.map(
                                            (sData: any, index: number) => {
                                                return (
                                                    <Grid key={index}>
                                                        <Cardbord
                                                            title={sData.title}
                                                            img={sData.img}
                                                            overview={
                                                                sData.overview
                                                            }
                                                            date={sData.date}
                                                            skill={sData.skill}
                                                            url={sData.url}
                                                            git={sData.git}
                                                        />
                                                    </Grid>
                                                )
                                            }
                                        )}
                                    </Box>
                                </section>

                                <section>
                                    <h3>
                                        <span>PROTOTYPE</span>
                                    </h3>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "space-around",
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        {prototypeData.map(
                                            (pData: any, index: number) => {
                                                return (
                                                    <Grid key={index}>
                                                        <Cardbord
                                                            title={pData.title}
                                                            img={pData.img}
                                                            overview={
                                                                pData.overview
                                                            }
                                                            date={pData.date}
                                                            skill={pData.skill}
                                                            url={pData.url}
                                                            git={pData.git}
                                                        />
                                                    </Grid>
                                                )
                                            }
                                        )}
                                    </Box>
                                </section>

                                <section>
                                    <h3>
                                        <span>FRAMEWORK</span>
                                    </h3>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "space-around",
                                            p: 1,
                                            m: 1,
                                        }}
                                    >
                                        {frameworkData.map(
                                            (fData: any, index: number) => {
                                                return (
                                                    <Grid key={index}>
                                                        <Cardbord
                                                            title={fData.title}
                                                            img={fData.img}
                                                            overview={
                                                                fData.overview
                                                            }
                                                            date={fData.date}
                                                            skill={fData.skill}
                                                            url={fData.url}
                                                            git={fData.git}
                                                        />
                                                    </Grid>
                                                )
                                            }
                                        )}
                                    </Box>
                                </section>
                            </Paper>
                        </Grid>
                    </Grid>
                    <ReturnTopButton />
                </Box>
                <FooterArticle />
            </div>
        </>
    )
}

export default list
