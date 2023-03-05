import Comments from 'components/Comments/Comments'
import PageTitle from 'components/PageTitle/PageTitle'
import PostsList from 'components/PostsList/PostsList'
import Slider from 'components/Slider/Slider'
import { Post } from 'utils/posts'

type Props = {
    posts: Post[]
}
const Home = ({ posts }: Props) => {
    return (
        <div>
            <Slider />
            <PageTitle title="Le ultime notizie:" />
            <PostsList posts={posts} />
            <Comments />
        </div>
    )
}
export default Home
