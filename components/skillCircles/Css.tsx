import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Css: React.FC = () => {
    const percentage: any = 80
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text={"CSS/SCSS"}
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#328EB7",
                    pathColor: "#328EB7",
                })}
            />
        </div>
    )
}

export default Css
