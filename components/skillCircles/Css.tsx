import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { easeQuadInOut } from "d3-ease"
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import "react-circular-progressbar/dist/styles.css"
import ChangingProgressProvider from "./ChangingProgressProvider"

const Css: React.FC = () => {
    const percentage: any = 90
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <ChangingProgressProvider values={[0, 90]}>
                {(percentage: any) => (
                    <CircularProgressbar
                        value={percentage}
                        text={"CSS/SCSS"}
                        background
                        styles={buildStyles({
                            pathTransitionDuration: 1,
                            strokeLinecap: "butt",
                            textColor: "#fff",
                            pathColor: "#328EB7",
                            backgroundColor: "#000",
                            textSize: "14px",
                        })}
                    />
                )}
            </ChangingProgressProvider>
        </div>
    )
}

export default Css
