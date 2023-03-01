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
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { postsArray, lastPostsArray } from 'utils/posts'
import { omit } from 'lodash'

type Props = {}
export type ProductsInCart = {
    [id: number]: number
}
const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 5,
    })
    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id]))
    }
    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Routes>
                    <Route path="/" element={<Home posts={lastPostsArray} />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route
                        path="news"
                        element={<NewsEvents posts={postsArray} />}
                    />
                    <Route path="contacts" element={<Contacts />} />
                    <Route
                        path="/shopping"
                        element={
                            <Shopping addProductToCart={addProductToCart} />
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>

                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
