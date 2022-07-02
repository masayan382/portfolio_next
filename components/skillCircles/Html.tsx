import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Html: React.FC = () => {
    const percentage: any = 90
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <CircularProgressbar
                value={percentage}
                text="HTML"
                background
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#fff",
                    pathColor: "#F56310",
                    backgroundColor: "#000",
                    textSize: "14px",
                })}
            />
        </div>
    )
}

export default Html
