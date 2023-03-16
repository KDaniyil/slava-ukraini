import PageTitle from 'components/PageTitle/PageTitle'
import PostsList from 'components/PostsList/PostsList'
import { postsArray } from 'utils/posts'

type Props = {
}
const NewsEvents = (props: Props) => {
    return (
        <div>
            <PageTitle title="Eventi & News" />
            <PostsList
                posts={postsArray.filter((post) => post.category === 'mitings')}
            />
        </div>
    )
}
export default NewsEvents
