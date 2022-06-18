import React from "react"
import Image from "next/image"
import { css, keyframes } from "@mui/styled-engine"
import ParticlesBackground from "../components/ParticlesBackground"
import { stepClasses } from "@mui/material"

const topContent = css({
    position: "absolute",
    top: "49%",
    left: "50%",
    transform: "translateY(-49%) translateX(-50%)",
    color: "#fff",
    textAlign: "center",
    textShadow: "1px 0 5px black",
    width: "100%",
})

const title = css({
    margin: "50px auto 40px",
    fontSize: "3.5rem",
    lineHeight: "1.5",
    width: "18ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    letterSpacing: "0.05em",
    borderRight: "3px solid transparent",
})
const typing = keyframes`
  0% {
    width:0;
  }
`
const sparkling = keyframes`
  50% {
    border-right-color:white;
  },
`
const animation = css`
    animation: ${typing} 2.5s steps(18), ${sparkling} 0.5s 6 step-end alternate;
`

const titleSub = css({
    margin: " 0 0 30px",
    letterSpacing: "1px",
    fontSize: "1.2rem",
    "&::before": {
        display: "inline-block",
        margin: "0 30px",
        width: "50px",
        height: "2px",
        backgroundColor: "#fff",
        content: '""',
        verticalAlign: "middle",
    },
    "&::after": {
        display: "inline-block",
        margin: "0 30px",
        width: "50px",
        height: "2px",
        backgroundColor: "#fff",
        content: '""',
        verticalAlign: "middle",
    },
})

const message = css({
    color: "#f7a501",
})

const Top: React.FC = () => {
    return (
        <>
            <ParticlesBackground />
            <div css={topContent}>
                <div>
                    <p css={titleSub}>Front-end Engineer's portfolio by T·M</p>
                    <h1 css={[title, animation]}>Welcome To My Site</h1>
                    <p css={message}>Please check out some of my works.</p>
                </div>
            </div>
        </>
    )
}

export default Top
