import React from "react"
import Image from "next/image"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import MailForm from "../pages/MailForm"
import { mq } from "./css"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    })
)

const bottomBg = css({
    // backgroundImage: "url('/img/box.jpg')",
    backgroundImage:
        "linear-gradient(90deg, rgba(226, 207, 255, 1) 60%, rgba(251, 253, 191, 1))",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "cover",
})
const topBg = css({
    backgroundImage: "url('/img/shadow95.png')",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
})

const sliderContainer = css({
    h2: {
        margin: "12px 0",
    },
    width: "calc(100%-96px)",
    height: "auto",
    margin: "0",
    // padding: "96px 96px",
    color: "#fff",
    textShadow: "1px 0 5px black",
    " p": {
        margin: "8px 0",
    },
    [mq[0]]: {
        padding: "56px 20px 56px",
    },
    [mq[1]]: {
        padding: "56px 24px 56px",
    },
    [mq[2]]: {
        padding: "98px 40px 56px",
    },
    [mq[3]]: {
        padding: "98px 40px 56px",
    },
})

const textArea = css({
    padding: "0",
    [mq[0]]: {
        padding: "0px 16px",
    },
    [mq[1]]: {
        padding: "0px 12px",
    },
    [mq[2]]: {
        padding: "0px 40px",
    },
})

const formArea = css({
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
})

const Contact: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <div css={textArea}>
                            <h2>Contact</h2>
                            <p>
                                お仕事のご依頼・作品に関するご感想などは下記よりお問い合わせください。
                            </p>
                        </div>
                    </Grid>
                    <div css={formArea}>
                        <MailForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
