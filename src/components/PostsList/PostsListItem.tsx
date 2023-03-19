import {Button, Card, CardActions, CardContent } from '@mui/material'
import LinkButton from 'components/LinkButton/LinkButton'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Post } from 'utils/posts'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { addThumb, removeThumb } from 'redux/thumbReducer';

type Props = {
    post: Post
}
const PostsListItem = ({ post }: Props) => {
    const isThumb = useAppSelector(
        (state) => state.postsThumbState[post.id]
    )
    const dispatch = useAppDispatch()
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
            <CardActions className='action-btns'>
                <LinkButton to={`/posts/${post.id}`}>
                    Leggi
                </LinkButton>
                <Button
                    size='small'
                    className='thumb'
                    onClick={() =>
                        isThumb
                            ? dispatch(removeThumb(post.id))
                            : dispatch(addThumb(post.id))
                    }
                >
                    {isThumb ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
                </Button>

            </CardActions>
        </Card>
    )
}
export default PostsListItem
