import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { easeQuadInOut } from "d3-ease"
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import "react-circular-progressbar/dist/styles.css"

const VueJs: React.FC = () => {
    const percentage: any = 65
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={65}
                duration={2.5}
                easingFunction={easeQuadInOut}
                repeat
            >
                {(value: any) => {
                    const roundedValue = Math.round(value)
                    return (
                        <CircularProgressbar
                            value={value}
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
                    )
                }}
            </AnimatedProgressProvider>
        </div>
    )
}

export default VueJs
