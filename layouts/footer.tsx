import * as React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import { css } from "@mui/styled-engine"
import Image from "next/image"

function Copyright() {
    return (
        <Typography css={whiteColor}>
            <span>
                <Image src="/rogo.png" alt="" width={14} height={14} />{" "}
            </span>
            {"Copyright © "}
            Portfolio {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const footerArea = css({
    backgroundColor: "#000",
    textAlign: "center",
})
const whiteColor = css({
    color: "#fff",
})

function Footer() {
    return (
        <Box
        // sx={{
        //     display: "flex",
        //     flexDirection: "column",
        //     minHeight: "100vh",
        // }}
        >
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: "auto",
                }}
                css={footerArea}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>
        </Box>
    )
}
export default Footer
