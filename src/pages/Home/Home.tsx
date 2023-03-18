import { Container } from '@mui/system'
import Map from 'components/Map/Map'
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
                <Map />
            </Container>
            
        </div>
    )
}
export default Home
