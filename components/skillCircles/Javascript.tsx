import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Javascript: React.FC = () => {
    const percentage: any = 85
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="javascript"
                background
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#fff",
                    pathColor: "#F7DF1E",
                    backgroundColor: "#000",
                    textSize: "14px",
                })}
            />
        </div>
    )
}

export default Javascript