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
import './App.scss'
import Donation from 'pages/Donation/Donation'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import ThumbPage from 'pages/ThumbPage/ThumbPage'

type Props = {}

const App = (props: Props) => {
    return (
        <div className="app">
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="posts/:id" element={<SinglePost />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="posts" element={<NewsEvents />} />
                    <Route
                        path="category/:category"
                        element={<CategoryPage />}
                    />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="favorites" element={<ThumbPage />} />
                    <Route path="shop" element={<Shopping />} />

                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="donation" element={<Donation />} />
                </Routes>
                <Footer />
            </StyledEngineProvider>
        </div>
    )
}
export default App
