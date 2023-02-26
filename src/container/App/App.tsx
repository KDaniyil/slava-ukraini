import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import AboutUs from 'pages/AboutUs/AboutUs'
import Home from 'pages/Home/Home'
import NewsEvents from 'pages/NewsEvents/NewsEvents'
import Shopping from 'pages/Shopping/Shopping'
import SinglePost from 'pages/SinglePost/SinglePost'
import { postsArray, lastPostsArray } from 'utils/posts'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                {/* <Home posts={lastPostsArray} /> */}
                {/* <NewsEvents posts={postsArray} /> */}
                {/* <AboutUs /> */}
                <Shopping />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
