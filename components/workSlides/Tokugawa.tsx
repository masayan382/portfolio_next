import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Box from "@mui/material/Box"
import { css } from "@mui/styled-engine"
import Button from "@mui/material/Button"
import { makeStyles } from "@material-ui/core"
import Link from "next/link"

const cardTable = css({
    width: "100%",
    "tr > th": {
        width: "30px",
        whiteSpace: "nowrap",
        textAlign: "left",
        verticalAlign: "top",
        paddingRight: "8px",
        fontSize: "12px",
        fontWeight: "normal",
    },
    "tr > td": {
        fontSize: "12px",
        verticalAlign: "top",
    },
})

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "4px 6px",
        color: "rgb(33, 150, 243)",
        textDecoration: "none",
        display: "flex",
        "&:hover": {
            backgroundColor: "rgba(33, 150, 243, 0.06)",
            borderRadius: "4px",
            textDecoration: "none",
        },
        Link: {
            underline: "none",
        },
    },
}))

const Tokugawa: React.FC = () => {
    const classes = useStyles()
    return (
        <Box sx={{ boxShadow: 5 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader title="徳川式電脳算術機" />
                <CardMedia
                    component="img"
                    height="194"
                    image="/work/tokugawa.gif"
                    alt="徳川式電脳算術機"
                />
                <CardContent style={{ padding: "4px 16px" }}>
                    <table css={cardTable}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>概要</th>
                                <td>
                                    「関ヶ原の戦い」における徳川家康サイドからの兵力差を測るアプリ。選んだ武将の兵力数が加算され自動計算されます。
                                </td>
                            </tr>
                            <tr>
                                <th>公開日</th>
                                <td>2020/06/28</td>
                            </tr>
                            <tr>
                                <th>使用技術</th>
                                <td>HTML、CSS、TypeScript、Bootstrap</td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
                <CardActions disableSpacing>
                    <Link
                        href="https://masataka.site/tokugawasiki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.root}
                    >
                        <Button size="large" className={classes.root}>
                            <a
                                style={{
                                    background: "none",
                                }}
                            >
                                WEBページへ
                            </a>
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/masayan382/tokugawasiki"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="large" className={classes.root}>
                            <a>Githubへ</a>
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Tokugawa
