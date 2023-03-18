import {Card, CardActions, CardContent } from '@mui/material'
import LinkButton from 'components/LinkButton/LinkButton'
import { Post } from 'utils/posts'

type Props = {
    post: Post
}
const PostsListItem = ({ post }: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="post-image">
                    <img src={post.image} alt={post.title} />
                </div>
                <div className="post-date">
                    <div>{post.date}</div>
                    <LinkButton to={`/category/${post.category}`}>{post.category}</LinkButton>
                </div>
                <div className="post-title">{post.title}</div>
                <div className="post-text">{post.text}</div>
            </CardContent>
            <CardActions>
                <LinkButton to={`/posts/${post.id}`}>
                    Leggi
                </LinkButton>
            </CardActions>
        </Card>
    )
}
export default PostsListItem
