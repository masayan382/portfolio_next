import React from "react"
import Image from "next/image"

const Top: React.FC = () => {
    return (
        <div>
            <Image
                src="/img/hands.jpg"
                layout="responsive"
                width={640}
                height={400}
                alt=""
            />
        </div>
    )
}

export default Top
