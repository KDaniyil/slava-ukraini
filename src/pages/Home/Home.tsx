import { Container } from '@mui/system'
import ContactsDetails from 'components/ContactsDetails/ContactsDetails'
import PageTitle from 'components/PageTitle/PageTitle'
import PostsList from 'components/PostsList/PostsList'
import Slider from 'components/Slider/Slider'
import { postsArray } from 'utils/posts'
import Map from 'components/Map/Map'

type Props = {
}
const Home = (props: Props) => {
    return (
        <div>
            <Slider />
            <Container>
                <PageTitle title="Le ultime notizie:" />
                <PostsList posts={postsArray.slice(-3)} />
                <PageTitle title="Noi siamo qui:" />
                <Map/>
                <ContactsDetails />
            </Container>
            
        </div>
    )
}
export default Home
