import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react" //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from "swiper" //使いたい機能をインポート

SwiperCore.use([Pagination, Navigation])

const images = [
    "/img/post.jpg",
    "/img/box.jpg",
    "/img/hands.jpg",
    "/img/book.jpg",
]

const Slider: React.FC = () => {
    return (
        <Swiper
            slidesPerView={1} //一度に表示するスライドの数
            pagination={{
                clickable: true,
            }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
            navigation //スライドを前後させるためのボタン、スライドの左右にある
            loop={true}
        >
            {images.map((src: string, index: number) => {
                return (
                    <SwiperSlide key={`${index}`}>
                        <Image
                            src={src}
                            layout="responsive"
                            width={640}
                            height={400}
                            alt=""
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Slider
