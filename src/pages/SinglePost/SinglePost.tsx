import './SinglePost.scss'
import { Container, Typography } from '@mui/material'
import { Post } from 'utils/posts'

type Props = {
    post: Post
}
function SinglePost({ post }: Props) {
    return (
        <Container className="single-post">
            <Typography variant="h2" component="h2" align="center">
                {post.title}
            </Typography>
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
