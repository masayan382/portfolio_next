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

const transparent = css({
    backgroundColor: "transparent",
})

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div css={transparent}>
                <Toolbar>
                    <span>
                        <Image src="/rogo.png" alt="" width={28} height={28} />
                    </span>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, m: 2 }}
                        color="secondary"
                    >
                        Portfolio
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon sx={{ fontSize: 48 }} />
                    </IconButton>
                </Toolbar>
            </div>
        </Box>
    )
}
export default Header
