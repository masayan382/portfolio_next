import React from "react"
import Image from "next/image"
import { css, keyframes } from "@mui/styled-engine"
import ParticlesBackground from "../components/ParticlesBackground"
import { stepClasses } from "@mui/material"

const topContent = css({
    position: "absolute",
    top: "calc(50% - 56px)",
    left: "50%",
    transform: "translateY(-49%) translateX(-50%)",
    color: "#fff",
    textAlign: "center",
    textShadow: "1px 0 5px black",
    width: "100%",
    margin: "0 auto",
    maxWidth: "640px",
})

const title = css({
    margin: "50px auto 40px",
    fontSize: "clamp(1.8rem,5vw,3.5rem)",
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
    fontSize: "clamp(0.75rem,5vw,1.2rem)",
    "&::before": {
        display: "inline-block",
        margin: "0 30px",
        width: "72px",
        height: "2px",
        backgroundColor: "#fff",
        content: '""',
        verticalAlign: "middle",
        textShadow: "1px 0 5px black",
    },
    "&::after": {
        display: "inline-block",
        margin: "0 30px",
        width: "72px",
        height: "2px",
        backgroundColor: "#fff",
        content: '""',
        verticalAlign: "middle",
        textShadow: "1px 0 5px black",
    },
    "@media (max-width: 630px)": {
        fontSize: "14px",
        "&::before": {
            display: "block",
            margin: "10px auto",
            width: "80%",
            height: "2px",
            backgroundColor: "#fff",
            content: '""',
            verticalAlign: "middle",
            textShadow: "1px 0 5px black",
        },
        "&::after": {
            display: "block",
            margin: "10px auto",
            width: "80%",
            height: "2px",
            backgroundColor: "#fff",
            content: '""',
            verticalAlign: "middle",
            textShadow: "1px 0 5px black",
        },
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
