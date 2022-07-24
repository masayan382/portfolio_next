import React from "react"
import Link from "next/link"
import { css } from "@mui/styled-engine"
import Grid from "@mui/material/Grid"

const listBtn = css({
    margin: "32px auto",
    a: {
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0 auto",
        maxWidth: "240px",
        border: "2px solid #FADA41",
        borderRadius: "25px",
        padding: "10px 25px",
        color: "#000",
        background: "#FADA41",
        transition: "0.3s ease-in-out",
        fontWeight: "600",
        overflow: "hidden",
        boxShadow: "0px 12px 10px -6px rgba(0, 0, 0, 0.3)",
        "&:hover": {
            background: "#000",
            color: "#FADA41",
        },
    },
})

const WorkListBack = () => {
    return (
        <Grid>
            <div css={listBtn}>
                <Link href="/list">
                    <a>WORKS LISTへ戻る</a>
                </Link>
            </div>
        </Grid>
    )
}

export default WorkListBack
