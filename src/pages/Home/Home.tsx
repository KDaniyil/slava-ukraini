import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import ContactsDetails from 'components/ContactsDetails/ContactsDetails'
import PageTitle from 'components/PageTitle/PageTitle'
import PostsList from 'components/PostsList/PostsList'
import Slider from 'components/Slider/Slider'
import { postsArray } from 'utils/posts'

type Props = {
}
const Home = (props: Props) => {
    return (
        <div>
            <Slider />
            <Container>
                <PageTitle title="Le ultime notizie:" />
                <PostsList posts={postsArray.slice(-3)} />
                <Typography variant="h4" component="h4">Noi siamo qui:</Typography>
                <ContactsDetails />
            </Container>
            
        </div>
    )
}
export default Home
