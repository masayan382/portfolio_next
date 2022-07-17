import React, { useRef, useState, useEffect } from "react"
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

    // useEffect(() => {
    //     return () => {
    //         let nextBtn: any = document.querySelector<HTMLElement>(".nextBtn")
    //         nextBtn.classList.add("swiper-button-disabled")
    //     }
    // }, [])
    return (
        <div
            style={{ position: "relative", width: "100vw", height: "100vh" }}
            className="topSwiper"
        >
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
                // onSlideChange={() => console.log("slide change")}
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
            <div className="prevBtn" ref={(node) => setPrevEl(node)}>
                <span>Scroll Up</span>
            </div>
            <div className="nextBtn" ref={(node) => setNextEl(node)}>
                <span>Scroll Down</span>
            </div>
        </div>
    )
}

export default Slider
