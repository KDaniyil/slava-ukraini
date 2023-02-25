import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import AboutUs from 'pages/AboutUs/AboutUs'
import Home from 'pages/Home/Home'
import SinglePost from 'pages/SinglePost/SinglePost'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <AboutUs />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
