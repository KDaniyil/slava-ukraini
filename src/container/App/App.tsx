import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import AboutUs from 'pages/AboutUs/AboutUs'
import CartPage from 'pages/CartPage/CartPage'
import Contacts from 'pages/Contacts/Contacts'
import Home from 'pages/Home/Home'
import NewsEvents from 'pages/NewsEvents/NewsEvents'
import Shopping from 'pages/Shopping/Shopping'
import SinglePost from 'pages/SinglePost/SinglePost'
import { Route, Routes } from 'react-router-dom'
import { postsArray } from 'utils/posts'
import './App.scss'
import Donation from 'pages/Donation/Donation'
import CheckoutPage from 'pages/Checkout/CheckoutPage'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home posts={postsArray.slice(-3)} />}
                    />
                    <Route
                        path="post:id"
                        element={
                            <SinglePost
                                post={{
                                    id: 0,
                                    image: '',
                                    title: '',
                                    text: '',
                                    date: '',
                                    category: undefined,
                                }}
                            />
                        }
                    />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route
                        path="news"
                        element={<NewsEvents posts={postsArray} />}
                    />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="shop" element={<Shopping />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="donation" element={<Donation />} />
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
