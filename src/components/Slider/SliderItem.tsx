import { Slides } from 'utils/slides'

type Props = {
    slide: Slides
}
const SliderItem = ({ slide }: Props) => {
    return (
        <div className="slide">
            <img src={slide.image} alt={slide.title} />
            <div className="slide-description">
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
            </div>
        </div>
    )
}
export default SliderItem
