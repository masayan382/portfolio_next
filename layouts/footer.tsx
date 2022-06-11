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

const footerAreaDetail = css({
    backgroundColor: "#000",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    width: "100vw",
})
const whiteColor = css({
    color: "#fff",
})

function Footer() {
    return (
        <Box>
            <CssBaseline />
            <Box
                component="footer"
                sx={{
                    py: 2,
                    px: 2,
                    mt: "auto",
                }}
                css={footerAreaDetail}
            >
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </Box>
        </Box>
    )
}
export default Footer
