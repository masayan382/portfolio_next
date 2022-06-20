import React from "react"
import Image from "next/image"
import { css } from "@mui/styled-engine"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { Barman, Necombo, Travel } from "../components/workSlides/index"
import { Swiper, SwiperSlide } from "swiper/react" //カルーセル用のタグをインポート
import { SwiperOptions } from "swiper"
import SwiperCore, { Pagination, Autoplay } from "swiper" //使いたい機能をインポート
import "swiper/css"
import "swiper/css/autoplay"
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
    width: "80%",
    height: "80%",
    padding: "96px 96px",
    margin: "0 auto",
    color: "#fff",
})

SwiperCore.use([Pagination, Autoplay])

const Works: React.FC = () => {
    const classes = useStyles()
    return (
        <div css={bottomBg}>
            <div css={topBg}>
                <div css={sliderContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <div className="worksPage">
                                <h2>Works</h2>
                                <div>
                                    <Swiper
                                        modules={[Pagination]}
                                        spaceBetween={20}
                                        slidesPerView={3}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: true,
                                        }}
                                        navigation={true}
                                        pagination={{ clickable: true }}
                                        loop={true}
                                        // scrollbar={{ draggable: true }}
                                        className="workSwiper"
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
                                            <Barman />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Necombo />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Travel />
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
