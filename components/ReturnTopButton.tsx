import { useEffect, useState } from "react"
import { makeStyles, Fab } from "@material-ui/core"
import { KeyboardArrowUp } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}))

const ReturnTopButton = () => {
    const classes = useStyles()
    const [isButtonActive, setIsButtonActive] = useState(false)

    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollWindow)
        return () => {
            window.removeEventListener("scroll", scrollWindow)
        }
    }, [])

    const scrollWindow = () => {
        const top = 100 //ボタンを表示させたい位置
        let scroll = 0
        scroll = window.scrollY
        if (top <= scroll) {
            setIsButtonActive(true)
        } else {
            setIsButtonActive(false)
        }
    }

    const normalStyle = {
        opacity: 0,
        transition: "0.5s",
        pointerEvents: "none",
        zIndex: "110",
    }
    const activeStyle = {
        opacity: 1,
        transition: "0.5s",
        zIndex: "110",
    }
    const style = isButtonActive ? activeStyle : normalStyle

    return (
        <div style={style} onClick={returnTop} className={classes.root}>
            <Fab
                size="small"
                aria-label="scroll back to top"
                style={{ background: "#F7A500", zIndex: "110" }}
            >
                <KeyboardArrowUp />
            </Fab>
        </div>
    )
}

export default ReturnTopButton
