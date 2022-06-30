import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Design: React.FC = () => {
    const percentage: any = 60
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="Design"
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#F40F00",
                    pathColor: "#F40F00",
                })}
            />
        </div>
    )
}

export default Design
