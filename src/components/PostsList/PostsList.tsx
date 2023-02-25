import { Typography, Grid, Container } from '@mui/material'
import { postsArray } from 'utils/posts'
import PostsListItem from './PostsListItem'
import './PostsList.scss'

type Props = {}
const PostsList = (props: Props) => {
    return (
        <>
            <Container className="posts-container">
                <Typography variant="h4" align="center" component="h2">
                    Eventi & News
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {postsArray.map((post) => {
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
