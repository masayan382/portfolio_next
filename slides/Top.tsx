import React from "react"
import Image from "next/image"
import { viewCover } from "./slideCss"
import { css } from "@mui/styled-engine"

const Top: React.FC = () => {
    return (
        <div css={viewCover}>
            <div>
                <h2>ABOUT</h2>
                <p>サンプルサンプルサンプル</p>
                <p>サンプルサンプルサンプル</p>
                <p>サンプルサンプルサンプル</p>
                <p>サンプルサンプルサンプル</p>
            </div>
        </div>
    )
}

export default Top
