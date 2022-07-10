import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import { css } from "@emotion/react"
import { makeStyles } from "@material-ui/core"

const headerAreaDetail = css({
    backgroundColor: "transparent",
    position: "absolute",
    top: "0",
    width: "100vw",
    height: "56px",
    zIndex: "100",
})

const useStyles = makeStyles({
    toolbar: {
        height: "56px",
        minHeight: "56px",
    },
    typography: {
        fontFamily: "Cinzel",
    },
})

function Header() {
    const classes = useStyles()
    return (
        <Box sx={{ flexGrow: 1 }} css={headerAreaDetail}>
            <div>
                <Toolbar className={classes.toolbar}>
                    <span>
                        <Image src="/logo.png" alt="" width={28} height={28} />
                    </span>
                    <Typography
                        className={classes.typography}
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1, marginLeft: 2 }}
                        color="secondary"
                    >
                        <a href="/">Portfolio</a>
                    </Typography>
                </Toolbar>
            </div>
        </Box>
    )
}
export default Header
