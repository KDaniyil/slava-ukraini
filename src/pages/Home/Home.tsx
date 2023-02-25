import EventsList from 'components/EventsList/EventsList'
import Slider from 'components/Slider/Slider'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <Slider />
            <EventsList />
        </div>
    )
}
export default Home
