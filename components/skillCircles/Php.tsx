import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Php: React.FC = () => {
    const percentage: any = 70
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <CircularProgressbar
                value={percentage}
                text="PHP/Laravel"
                background
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#fff",
                    pathColor: "#6181B6",
                    backgroundColor: "#000",
                    textSize: "14px",
                })}
            />
        </div>
    )
}

export default Php
