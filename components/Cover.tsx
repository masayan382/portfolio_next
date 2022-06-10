import React from "react"
import { css } from "@mui/styled-engine"

const viewCover = css({
    position: "absolute",
    backgroundColor: "#000",
    width: "50vw",
    height: "100vh",
    transform: "skew(-15deg)",
    "&::before": {
        content: '""',
        position: "absolute",
        backgroundColor: "#000",
        width: "99vw",
        height: "50vh",
        transform: "skew(0deg)",
        top: "0",
        left: "-180%",
        overflow: "hidden",
    },
})

const Cover: React.FC = () => {
    return (
        <>
            <div css={viewCover}>test</div>
        </>
    )
}
export default Cover
