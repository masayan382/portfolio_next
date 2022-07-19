import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import WebIcon from "@mui/icons-material/Web"
import GitHubIcon from "@mui/icons-material/GitHub"
import Tooltip from "@mui/material/Tooltip"
import Link from "@mui/material/Link"
import { shadows } from "@mui/system"
import Box from "@mui/material/Box"

import { css } from "@mui/styled-engine"

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
                <div className="iconLink">
                    <CardActions style={{ padding: "0 16px 0 16px" }}>
                        {props.url ? (
                            <Tooltip title="WEBサイトへ" placement="top">
                                <Link
                                    href="https://masataka.site/barman/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconButton aria-label="site">
                                        <WebIcon />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        ) : (
                            ""
                        )}
                        {props.git ? (
                            <Tooltip title="Githubへ" placement="top">
                                <Link
                                    href="https://masataka.site/barman/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconButton aria-label="github">
                                        <GitHubIcon />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        ) : (
                            ""
                        )}
                    </CardActions>
                </div>
            </Card>
        </Box>
    )
}

export default Cardbord
