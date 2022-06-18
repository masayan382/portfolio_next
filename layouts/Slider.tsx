import React, { useRef, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react" //カルーセル用のタグをインポート
import { SwiperOptions } from "swiper"
import SwiperCore, {
    Pagination,
    Navigation,
    Mousewheel,
    EffectFade,
} from "swiper" //使いたい機能をインポート
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { Top, About, Works } from "../slides/index"

SwiperCore.use([Pagination, Navigation, Mousewheel, EffectFade])

const Slider: React.FC = () => {
    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            <Swiper
                effect={"fade"}
                speed={500}
                direction={"vertical"}
                spaceBetween={0}
                slidesPerView={1} //一度に表示するスライドの数
                pagination={{
                    clickable: true,
                }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
                navigation //スライドを前後させるためのボタン、スライドの左右にある
                loop={false}
                mousewheel={true}
                modules={[Mousewheel, Pagination, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Top />
                </SwiperSlide>
                <SwiperSlide>
                    <About />
                </SwiperSlide>
                <SwiperSlide>
                    <Works />
                </SwiperSlide>

                {/* <ParticlesBackground /> */}
            </Swiper>
        </div>
    )
}

export default Slider
