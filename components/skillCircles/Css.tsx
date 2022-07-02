import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Css: React.FC = () => {
    const percentage: any = 90
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <CircularProgressbar
                value={percentage}
                text={"CSS/SCSS"}
                background
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#fff",
                    pathColor: "#328EB7",
                    backgroundColor: "#000",
                    textSize: "14px",
                })}
            />
        </div>
    )
}

export default Css
