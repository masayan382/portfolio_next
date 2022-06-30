import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Html: React.FC = () => {
    const percentage: any = 80
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="HTML"
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#F56310",
                    pathColor: "#F56310",
                })}
            />
        </div>
    )
}

export default Html
