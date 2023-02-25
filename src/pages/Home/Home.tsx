import PostsList from 'components/PostsList/PostsList'
import Slider from 'components/Slider/Slider'

type Props = {}
const Home = (props: Props) => {
    return (
        <div>
            <Slider />
            <PostsList />
        </div>
    )
}
export default Home
