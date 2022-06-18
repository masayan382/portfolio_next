import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react" //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation, Mousewheel } from "swiper" //使いたい機能をインポート
import "swiper/css"
import { Top, About } from "../slides/index"

SwiperCore.use([Pagination, Navigation, Mousewheel])

const Slider: React.FC = () => {
    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            <Swiper
                slidesPerView={1} //一度に表示するスライドの数
                pagination={{
                    clickable: true,
                }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
                navigation //スライドを前後させるためのボタン、スライドの左右にある
                loop={false}
                mousewheel={true}
            >
                <SwiperSlide>
                    <Top />
                </SwiperSlide>
                <SwiperSlide>
                    <About />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={"/img/box.jpg"}
                        layout="responsive"
                        objectFit="cover"
                        width={640}
                        height={400}
                        alt=""
                    />
                </SwiperSlide>
                {/* <ParticlesBackground /> */}
            </Swiper>
        </div>
    )
}

export default Slider