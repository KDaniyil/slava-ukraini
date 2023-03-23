import PageTitle from 'components/PageTitle/PageTitle'
import PostsList from 'components/PostsList/PostsList'
import { useAppSelector } from 'redux/hooks'
import { getPostsObject, Post, postsArray } from 'utils/posts'
import _ from 'lodash'

type Props = {
    postsObject?: {
        [id: number]: Post
    }
}

const ThumbPage = ({ postsObject = getPostsObject(postsArray) }: Props) => {
    const thumb = useAppSelector(
        (state) => state.postsThumbState)
    const favoritesArray = postsArray.filter((post) => thumb[post.id])
    const isThumbEmpty =  _.isEmpty(favoritesArray)
    const renderThumb = () => {
        return(
            <>
            <PageTitle title= "I tuoi post preferiti" />
            <PostsList posts={favoritesArray} />
            </>
        )
    }
    return (
        <>
            {
                isThumbEmpty ? <PageTitle title= "Non hai aggiunto niente ai preferiti" />  : renderThumb()
            }
        </>
    )
}

export default ThumbPage
