import { Button, Card, CardActions, CardContent } from '@mui/material'
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
                <div className="post-date">{post.date}</div>
                <div className="post-title">{post.title}</div>
                <div className="post-text">{post.text}</div>
            </CardContent>
            <CardActions>
                <Button className="post-button" size="small">
                    Leggi
                </Button>
            </CardActions>
        </Card>
    )
}
export default PostsListItem
