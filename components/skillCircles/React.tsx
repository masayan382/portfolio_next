import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const ReactJs: React.FC = () => {
    const percentage: any = 70
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="React.js/Next.js"
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#4DD8FF",
                    pathColor: "#4DD8FF",
                })}
            />
        </div>
    )
}

export default ReactJs
