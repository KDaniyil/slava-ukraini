type Props = {
    image: string
    title: string
}
function SliderItem({ image, title }: Props) {
    return (
        <div className="slide">
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}
export default SliderItem
