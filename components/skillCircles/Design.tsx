import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { easeQuadInOut } from "d3-ease"
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import "react-circular-progressbar/dist/styles.css"

const Design: React.FC = () => {
    const percentage: any = 70
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={70}
                duration={2.5}
                easingFunction={easeQuadInOut}
                repeat
            >
                {(value: any) => {
                    const roundedValue = Math.round(value)
                    return (
                        <CircularProgressbar
                            value={value}
                            text="Design"
                            background
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textColor: "#fff",
                                pathColor: "#F40F00",
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

export default Design
