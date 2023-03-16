import Comments from 'components/Comments/Comments'
import PageTitle from 'components/PageTitle/PageTitle'
import PostsList from 'components/PostsList/PostsList'
import Slider from 'components/Slider/Slider'
import { postsArray } from 'utils/posts'

type Props = {
}
const Home = (props: Props) => {
    return (
        <div>
            <Slider />
            <PageTitle title="Le ultime notizie:" />
            <PostsList posts={postsArray.slice(-3)} />
            <Comments />
        </div>
    )
}
export default Home
