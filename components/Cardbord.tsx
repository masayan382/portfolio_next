import React from "react"

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
        <div>
            <div>{props.title}</div>
            <div>{props.img}</div>
            <div>{props.overview}</div>
            <div>{props.date}</div>
            <div>{props.skill}</div>
            <div>{props.url}</div>
            <div>{props.git}</div>
        </div>
    )
}

export default Cardbord
