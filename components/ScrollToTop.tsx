import React from "react"
import PropTypes from "prop-types"
import { Zoom, useScrollTrigger, makeStyles, Fab } from "@material-ui/core"
import { KeyboardArrowUp } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const ScrollToTop: React.FC = () => {
    const classes = useStyles()
    const trigger = useScrollTrigger()

    const handleClick = (event: any) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#title"
        )

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    return (
        <Zoom in={trigger}>
            <div
                onClick={handleClick}
                role="presentation"
                className={classes.root}
                style={{ zIndex: "100" }}
            >
                <Fab
                    // color="primary"
                    size="small"
                    aria-label="scroll back to top"
                    style={{ background: "#F7A500" }}
                >
                    <KeyboardArrowUp />
                </Fab>
            </div>
        </Zoom>
    )
}

export default ScrollToTop
