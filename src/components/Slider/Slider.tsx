import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/scss/autoplay'
import SliderItem from './SliderItem'
import './Slider.scss'
import 'utils/slides.ts'
import { slidesArray } from 'utils/slides'
type Props = {}
const Slider = (props: Props) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation={true}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slidesArray.map(({ image, title }) => {
                return (
                    <SwiperSlide>
                        <SliderItem image={image} title={title} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
export default Slider
