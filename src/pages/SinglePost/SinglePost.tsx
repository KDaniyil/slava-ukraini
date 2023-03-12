import './SinglePost.scss'
import { Container } from '@mui/material'
import { getPostsObject, Post, postsArray } from 'utils/posts'
import PageTitle from 'components/PageTitle/PageTitle'
import { useParams } from 'react-router-dom'

type Props = {
    postsObject?: {
        [id: number]: Post
    }
}
const SinglePost = ({ postsObject = getPostsObject(postsArray) }: Props) => {
    const { id } = useParams()
    const post: Post = postsObject[parseInt(id!)]
    return (
        <Container className="single-post">
            <PageTitle title={post.title} />
            <div className="single-post-content">
                <div className="single-post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="post-date">
                        <div>{post.date}</div>
                        <div>Categoria: {post.category}</div>
                    </div>
                </div>
                <p className="single-post-text">{post.text}</p>
            </div>
        </Container>
    )
}
export default SinglePost
