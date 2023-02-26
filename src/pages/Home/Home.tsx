import { Typography } from '@mui/material'
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
            <PageTitle title="Ultime notizie:" />
            <PostsList posts={posts} />
        </div>
    )
}
export default Home
