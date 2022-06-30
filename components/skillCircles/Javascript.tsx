import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Javascript: React.FC = () => {
    const percentage: any = 80
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="javascript"
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#F7DF1E",
                    pathColor: "#F7DF1E",
                })}
            />
        </div>
    )
}

export default Javascript
