import PageTitle from 'components/PageTitle/PageTitle'
import PostsList from 'components/PostsList/PostsList'
import { Post } from 'utils/posts'

type Props = {
    posts: Post[]
}
function NewsEvents({ posts }: Props) {
    return (
        <div>
            <PageTitle title="Eventi & News" />
            <PostsList posts={posts} />
        </div>
    )
}
export default NewsEvents
