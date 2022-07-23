import React, { memo } from "react"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
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
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { mq } from "./css"
import Link from "next/link"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    })
)

const bottomBg = css({
    backgroundImage:
        "linear-gradient(120deg, rgba(169, 201, 255, 1) 55%, rgba(251, 187, 236, 1) 98%)",
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
    h2: {
        margin: "12px 0",
    },
    width: "calc(100%-96px)",
    height: "100%",
    margin: "0",
    color: "#fff",
    [mq[0]]: {
        padding: "56px 20px 56px",
    },
    [mq[1]]: {
        padding: "56px 24px 56px",
    },
    [mq[2]]: {
        padding: "98px 40px 56px",
    },
    [mq[3]]: {
        padding: "98px 40px 56px",
    },
})

const textArea = css({
    padding: "0",
    [mq[0]]: {
        padding: "0px 16px",
    },
    [mq[1]]: {
        padding: "0px 12px",
    },
    [mq[2]]: {
        padding: "0px 40px",
    },
})

const workArea = css({
    padding: "0",
    [mq[0]]: {
        padding: "24px 0px 0px",
    },
    [mq[1]]: {
        padding: "24px 0px 0px",
    },
    [mq[2]]: {
        padding: "0px 0px",
    },
})

const listBtn = css({
    margin: "32px auto",
    a: {
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0 auto",
        maxWidth: "240px",
        border: "2px solid #FADA41",
        borderRadius: "25px",
        padding: "10px 25px",
        color: "#000",
        background: "#FADA41",
        transition: "0.3s ease-in-out",
        fontWeight: "600",
        overflow: "hidden",
        boxShadow: "0px 12px 10px -6px rgba(0, 0, 0, 0.3)",
        "&:hover": {
            background: "#000",
            color: "#FADA41",
        },
    },
})

SwiperCore.use([Pagination, Autoplay, Navigation])

const Works: React.FC = memo(() => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <div css={textArea}>
                            <h2>Works</h2>
                            <p>Please check out some of my works!</p>
                        </div>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div className="worksPage" css={workArea}>
                                <Swiper
                                    modules={[Pagination, Navigation]}
                                    spaceBetween={24}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: true,
                                    }}
                                    navigation={true}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    className="workSwiper"
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
                                <Grid>
                                    <div css={listBtn}>
                                        <Link href="/list">
                                            <a>全カード一覧へ</a>
                                        </Link>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
})

export default Works
