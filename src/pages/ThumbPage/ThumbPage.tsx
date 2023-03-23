import PostsList from 'components/PostsList/PostsList'
import { useAppSelector } from 'redux/hooks'
import { getPostsObject, Post, postsArray } from 'utils/posts'

type Props = {
    postsObject?: {
        [id: number]: Post
    }
}

const ThumbPage = ({ postsObject = getPostsObject(postsArray) }: Props) => {
    const isThumb = useAppSelector(
        (state) => state.postsThumbState)
        const favoritesArray = postsArray.filter((post) => isThumb[post.id])
    return (
        <>
            <div>{isThumb[1]}</div>
            <PostsList posts={favoritesArray} />
        </>
    )
}

export default ThumbPage
