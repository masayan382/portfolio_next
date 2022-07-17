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

const contentsBase = css({
    backgroundImage:
        "linear-gradient(135deg, rgba(169, 201, 255, 1), rgba(251, 187, 236, 1))",
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
                        <Paper elevation={3} css={paperArea}>
                            <h2 id="title" style={{ textAlign: "center" }}>
                                <span>WORKS LIST</span>
                            </h2>
                            <h3>DESIGN</h3>
                            <Cardbord />
                            <h3>WEB SITE</h3>
                            <Cardbord />
                            <h3>PROTOTYPE</h3>
                            <Cardbord />
                            <h3>FRAMEWORK</h3>
                            <Cardbord />
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
