import React, { useState } from "react"
import { css } from "@mui/styled-engine"

const viewCover = css({
    backgroundColor: "#000",
    width: "50%",
    height: "100%",
    position: "absolute",
})

const Cover: React.FC = () => {
    return (
        <>
            <div css={viewCover}></div>
        </>
    )
}
export default Cover
