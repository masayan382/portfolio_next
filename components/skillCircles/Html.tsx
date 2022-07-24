import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { easeQuadInOut } from "d3-ease"
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import "react-circular-progressbar/dist/styles.css"
import ChangingProgressProvider from "./ChangingProgressProvider"

const Html: React.FC = () => {
    const percentage: number = 90
    return (
        <div style={{ maxWidth: 160, minWidth: 64 }}>
            <ChangingProgressProvider values={[0, 90]}>
                {(percentage: any) => (
                    <CircularProgressbar
                        value={percentage}
                        text="HTML"
                        background
                        styles={buildStyles({
                            pathTransitionDuration: 1,
                            strokeLinecap: "butt",
                            textColor: "#fff",
                            pathColor: "#F56310",
                            backgroundColor: "#000",
                            textSize: "14px",
                        })}
                    />
                )}
            </ChangingProgressProvider>
            {/* <AnimatedProgressProvider
                valueStart={0}
                valueEnd={90}
                duration={2.5}
                easingFunction={easeQuadInOut}
                repeat
            >
                {(value: any) => {
                    const roundedValue = Math.round(value)
                    return (
                        <CircularProgressbar
                            value={value}
                            text="HTML"
                            background
                            styles={buildStyles({
                                strokeLinecap: "butt",
                                textColor: "#fff",
                                pathColor: "#F56310",
                                backgroundColor: "#000",
                                textSize: "14px",
                            })}
                        />
                    )
                }}
            </AnimatedProgressProvider> */}
        </div>
    )
}

export default Html
