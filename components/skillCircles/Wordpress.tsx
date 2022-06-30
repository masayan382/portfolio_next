import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Wordpress: React.FC = () => {
    const percentage: any = 70
    return (
        <div style={{ width: 160, height: 160 }}>
            <CircularProgressbar
                value={percentage}
                text="Wordpress/Laravel"
                styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "#464342",
                    pathColor: "#464342",
                })}
            />
        </div>
    )
}

export default Wordpress
