import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { easeQuadInOut } from "d3-ease"
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import "react-circular-progressbar/dist/styles.css"
import ChangingProgressProvider from "./ChangingProgressProvider"

const VueJs: React.FC = () => {
    const percentage: any = 65
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <ChangingProgressProvider values={[0, 65]}>
                {(percentage: any) => (
                    <CircularProgressbar
                        value={percentage}
                        text="Vue.js"
                        background
                        styles={buildStyles({
                            pathTransitionDuration: 1,
                            strokeLinecap: "butt",
                            textColor: "#fff",
                            pathColor: "#41B883",
                            backgroundColor: "#000",
                            textSize: "14px",
                        })}
                    />
                )}
            </ChangingProgressProvider>
        </div>
    )
}

export default VueJs
