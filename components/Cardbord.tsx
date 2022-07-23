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

const cardTable = css({
    width: "100%",
    "tr > th": {
        width: "30px",
        whiteSpace: "nowrap",
        textAlign: "left",
        verticalAlign: "top",
        paddingRight: "8px",
        fontSize: "14px",
        fontWeight: "normal",
    },
    "tr > td": {
        fontSize: "14px",
        verticalAlign: "top",
    },
})

type cardData = {
    id?: string
    category?: string
    title?: string
    img?: string
    overview?: string
    date?: string
    skill?: string
    url?: string
    git?: string
}

const Cardbord: React.FC<cardData> = (props) => {
    const classes = useStyles()
    return (
        <Box
            sx={{
                boxShadow: 5,
                margin: "16px 0",
                maxWidth: "384px",
                maxHeight: "500px",
            }}
        >
            <Card>
                <CardHeader title={props.title} />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.img == "" ? "/no_image.jpg" : props.img}
                    alt={props.title}
                />
                <CardContent>
                    <table css={cardTable}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>概要</th>
                                <td>{props.overview}</td>
                            </tr>
                            <tr>
                                <th>公開日</th>
                                <td>{props.date}</td>
                            </tr>
                            <tr>
                                <th>使用技術</th>
                                <td>{props.skill}</td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
                <CardActions
                    style={{
                        padding: "0px 16px 8px 16px",
                    }}
                >
                    {props.url ? (
                        <Link
                            href={props.url}
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
                    ) : (
                        ""
                    )}
                    {props.git ? (
                        <Link
                            href={props.git}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="large" className={classes.root}>
                                <a>Githubへ</a>
                            </Button>
                        </Link>
                    ) : (
                        ""
                    )}
                </CardActions>
            </Card>
        </Box>
    )
}

export default Cardbord
