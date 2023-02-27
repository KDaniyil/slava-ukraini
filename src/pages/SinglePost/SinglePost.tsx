import './SinglePost.scss'
import { Container } from '@mui/material'
import { Post } from 'utils/posts'
import PageTitle from 'components/PageTitle/PageTitle'

type Props = {
    post: Post
}
const SinglePost = ({ post }: Props) => {
    return (
        <Container className="single-post">
            <PageTitle title={post.title} />
            <div className="single-post-content">
                <div className="single-post-image">
                    <img src={post.image} alt={post.title} />
                    <p className="post-date">{post.date}</p>
                </div>
                <p className="single-post-text">{post.text}</p>
            </div>
        </Container>
    )
}
export default SinglePost
