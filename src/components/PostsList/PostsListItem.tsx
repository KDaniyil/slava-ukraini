import { Button, Card, CardActions, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
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
                    <div>Categoria: {post.category}</div>
                </div>
                <div className="post-title">{post.title}</div>
                <div className="post-text">{post.text}</div>
            </CardContent>
            <CardActions>
                <Button className="post-button" size="small">
                    <Link to={`/posts/${post.id}`}>Leggi</Link>
                </Button>
            </CardActions>
        </Card>
    )
}
export default PostsListItem
