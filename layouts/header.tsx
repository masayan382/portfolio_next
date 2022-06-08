import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import { css } from "@emotion/react"

const theme = {
    spacing: 8,
}

export default function header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <span>
                        <Image src="/rogo.png" alt="" width={28} height={28} />
                    </span>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, m: 2 }}
                    >
                        Portfolio
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
