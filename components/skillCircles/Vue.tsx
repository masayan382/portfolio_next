import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const VueJs: React.FC = () => {
    const percentage: any = 65
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <CircularProgressbar
                value={percentage}
                text="Vue.js"
                background
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#fff",
                    pathColor: "#41B883",
                    backgroundColor: "#000",
                    textSize: "14px",
                })}
            />
        </div>
    )
}

export default VueJs
