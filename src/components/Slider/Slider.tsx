import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'
import SliderItem from './SliderItem'
import './Slider.scss'
import 'utils/slides.ts'
import { slidesArray } from 'utils/slides'
type Props = {}
const Slider = (props: Props) => {
    return (
        <Swiper
            modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectFade,
            ]}
            effect={'fade'}
            navigation={true}
            loop={true}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slidesArray.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <SliderItem slide={slide} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
export default Slider
