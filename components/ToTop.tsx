import React from "react"
import Box from "@mui/material/Box"
import Fab from "@mui/material/Fab"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

const ToTop: React.FC = () => {
    return (
        <>
            <Fab size="medium" color="primary">
                <KeyboardArrowUpIcon />
            </Fab>
        </>
    )
}

export default ToTop
