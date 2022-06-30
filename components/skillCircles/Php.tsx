import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Php: React.FC = () => {
    const percentage: any = 65
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="PHP/Laravel"
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#6181B6",
                    pathColor: "#6181B6",
                })}
            />
        </div>
    )
}

export default Php
