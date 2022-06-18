import { Swiper, SwiperOptions } from "swiper"

const swiperParams: SwiperOptions = {
    allowTouchMove: false,
}

const swiper = new Swiper(".swiper", swiperParams)
export default swiper
