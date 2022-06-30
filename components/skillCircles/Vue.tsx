import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const VueJs: React.FC = () => {
    const percentage: any = 65
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="Vue.js"
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#41B883",
                    pathColor: "#41B883",
                })}
            />
        </div>
    )
}

export default VueJs
