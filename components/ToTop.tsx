import React from "react"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { css } from "@mui/styled-engine"
import { useSwiper } from "swiper/react"
import { mq } from "../slides/css"

const topBtn = css({
    position: "absolute",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    zIndex: "100",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0.9",
    ":hover": {
        opacity: "1",
    },
    [mq[0]]: {
        right: "8px",
        bottom: "64px",
    },
    [mq[1]]: {
        right: "16px",
        bottom: "78px",
    },
})

const ToTop: React.FC = () => {
    const swiper = useSwiper()
    return (
        <div
            css={topBtn}
            onClick={() => {
                swiper.slideTo(0)
            }}
        >
            <Fab size="small" style={{ background: "#F7A500" }}>
                <KeyboardArrowUpIcon />
            </Fab>
        </div>
    )
}

export default ToTop
