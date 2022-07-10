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
        fontSize: "12px",
        fontWeight: "normal",
    },
    "tr > td": {
        fontSize: "12px",
        verticalAlign: "top",
    },
})

const Necord: React.FC = () => {
    return (
        <Box sx={{ boxShadow: 5 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader title="Necord" />
                <CardMedia
                    component="img"
                    height="194"
                    image="/work/necord.gif"
                    alt="Necord"
                />
                <CardContent style={{ padding: "4px 16px" }}>
                    <table css={cardTable}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <th>概要</th>
                                <td>
                                    愛猫の成長をrecordするカレンダーアプリ。CRUD機能あり。
                                </td>
                            </tr>
                            <tr>
                                <th>公開日</th>
                                <td>2020/04/18</td>
                            </tr>
                            <tr>
                                <th>使用技術</th>
                                <td>
                                    HTML、CSS、javascript、jQuery、Bootstrap、Firebase
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title="WEBサイトへ" placement="top">
                        <Link
                            href="https://masataka.site/necord/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton aria-label="site">
                                <WebIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Githubへ" placement="top">
                        <Link
                            href="https://github.com/masayan382/Necord"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton aria-label="github">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Necord
