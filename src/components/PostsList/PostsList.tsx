import { Grid, Container } from '@mui/material'
import PostsListItem from './PostsListItem'
import './PostsList.scss'
import { Post } from 'utils/posts'

type Props = {
    posts: Post[]
}
const PostsList = ({ posts }: Props) => {
    return (
        <>
            <Container className="posts-container">
                <Grid container spacing={3} justifyContent="center">
                    {posts.map((post) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={post.id}>
                                <PostsListItem post={post} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}
export default PostsList
