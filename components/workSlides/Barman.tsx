import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import IconButton, { IconButtonProps } from "@mui/material/IconButton"
import WebIcon from "@mui/icons-material/Web"
import GitHubIcon from "@mui/icons-material/GitHub"
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

const Barman: React.FC = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Barman" />
            <CardMedia
                component="img"
                height="194"
                image="/work/barman.png"
                alt="barman"
            />
            <CardContent style={{ padding: "4px 16px" }}>
                <table css={cardTable}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th>概要</th>
                            <td>
                                架空の理容室のLP。パララックスデザインかつレスポンシブデザイン。フォームにはバリデーション機能あり。
                            </td>
                        </tr>
                        <tr>
                            <th>公開日</th>
                            <td>2019/09/30</td>
                        </tr>
                        <tr>
                            <th>使用技術</th>
                            <td>HTML、CSS、SCSS、javascript、jQuery</td>
                        </tr>
                    </tbody>
                </table>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="site">
                    <WebIcon />
                </IconButton>
                <IconButton aria-label="github">
                    <GitHubIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Barman
