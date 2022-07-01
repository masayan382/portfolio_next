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

const Sengoku: React.FC = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="戦国クエスト" />
            <CardMedia
                component="img"
                height="194"
                image="/work/sengoku.gif"
                alt="Sengoku"
            />
            <CardContent style={{ padding: "4px 16px" }}>
                <table css={cardTable}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th>概要</th>
                            <td>
                                ドラ○エ風のゲームをPHPで作成。14人武将のうち火縄銃を使うのは３人。一定確率で体力回復と会心の一撃を設定。
                            </td>
                        </tr>
                        <tr>
                            <th>公開日</th>
                            <td>2019/09/22</td>
                        </tr>
                        <tr>
                            <th>使用技術</th>
                            <td>HTML、CSS、PHP、javascript、jQuery</td>
                        </tr>
                    </tbody>
                </table>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title="WEBサイトへ" placement="top">
                    <Link
                        href="https://masataka.site/sengoku/"
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
                        href="https://github.com/masayan382/sengoku"
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
    )
}

export default Sengoku