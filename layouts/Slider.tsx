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
import { Top, About, Works, Skills, Contact } from "../slides/index"
import { AnyRecord } from "dns"

SwiperCore.use([Pagination, Navigation, Mousewheel, EffectFade])

const Slider: React.FC = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
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
                }}
                navigation={{ prevEl, nextEl }}
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
                <SwiperSlide>
                    <Skills />
                </SwiperSlide>
                <SwiperSlide>
                    <Contact />
                </SwiperSlide>
            </Swiper>
            <div ref={(node) => setPrevEl(node)}>prev</div>
            <div ref={(node) => setNextEl(node)}>next</div>
        </div>
    )
}

export default Slider
