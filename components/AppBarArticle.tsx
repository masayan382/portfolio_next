import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Image from "next/image"
import { Box } from "@mui/material"
import Link from "next/link"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            background: "#000",
            color: "#fff",
            // height: "60px",
            // minHeight: "60px",
        },
        title: {
            flexGrow: 1,
        },
        typography: {
            fontFamily: "Cinzel",
        },
    })
)

export default function AppBarArticle() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Box>
                <AppBar position="static" className={classes.root}>
                    <Toolbar>
                        <span style={{ marginRight: "16px" }}>
                            <Image
                                src="/logo.png"
                                alt=""
                                width={28}
                                height={28}
                            />
                        </span>
                        <Typography variant="h4" className={classes.typography}>
                            <Link href="/">
                                <a>Portfolio</a>
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
