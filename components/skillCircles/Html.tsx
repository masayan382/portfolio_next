import React from "react"
import ProgressBar from "react-customizable-progressbar"

const Html: React.FC = () => {
    return (
        <div>
            <ProgressBar progress={60} radius={100} />
        </div>
    )
}

export default Html
