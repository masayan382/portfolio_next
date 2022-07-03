import React from "react"
import Image from "next/image"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import {
    Barman,
    Necombo,
    Travel,
    Sengoku,
    Necord,
    WeatherBudda,
    BbsVue,
    Tokugawa,
    Chatbot,
    Monoqlo,
    Reactter,
    HooksCalendar,
    Lamall,
    TodoNext,
} from "../components/workSlides/index"
import { Swiper, SwiperSlide } from "swiper/react" //カルーセル用のタグをインポート
import { SwiperOptions } from "swiper"
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper" //使いたい機能をインポート
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    })
)

const bottomBg = css({
    backgroundImage:
        "linear-gradient(90deg, rgba(247, 93, 139, 1) 55%, rgba(254, 220, 64, 1))",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "cover",
})
const topBg = css({
    backgroundImage: "url('/img/shadow95.png')",
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
})

const sliderContainer = css({
    width: "100%",
    height: "100%",
    padding: "96px 96px",
    margin: "0 auto",
    color: "#fff",
})
const workArea = css({
    width: "88%",
    height: "100%",
})

SwiperCore.use([Pagination, Autoplay, Navigation])

const Works: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <h2 style={{ marginTop: 0 }}>Works</h2>
                            <p>Please check out some of my works!</p>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div className="worksPage" css={workArea}>
                                <div>
                                    <Swiper
                                        modules={[Pagination, Navigation]}
                                        spaceBetween={24}
                                        // autoplay={{
                                        //     delay: 3000,
                                        //     disableOnInteraction: true,
                                        // }}
                                        navigation={true}
                                        pagination={{ clickable: true }}
                                        loop={true}
                                        className="workSwiper"
                                        grabCursor={true}
                                        slidesPerView="auto"
                                        breakpoints={{
                                            400: {
                                                slidesPerView: 1,
                                                spaceBetween: 32,
                                                slidesPerGroupSkip: 1,
                                            },
                                            600: {
                                                slidesPerView: 2,
                                                spaceBetween: 8,
                                                slidesPerGroupSkip: 2,
                                            },
                                            1280: {
                                                slidesPerView: 3,
                                                spaceBetween: 24,
                                                slidesPerGroupSkip: 3,
                                            },
                                            1480: {
                                                slidesPerView: 4,
                                                spaceBetween: 32,
                                                slidesPerGroupSkip: 4,
                                            },
                                            1920: {
                                                slidesPerView: 5,
                                                spaceBetween: 32,
                                                slidesPerGroupSkip: 5,
                                            },
                                        }}
                                    >
                                        <SwiperSlide>
                                            <Barman />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Necombo />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Travel />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Sengoku />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Necord />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <WeatherBudda />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <BbsVue />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Tokugawa />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Chatbot />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Monoqlo />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Reactter />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <HooksCalendar />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Lamall />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <TodoNext />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Works
