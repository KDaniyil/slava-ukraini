import { Container, AppBar, Toolbar } from '@mui/material'
import './Header.scss'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'
import { ProductsInCart } from 'container/App/App'
type Props = {
    productsInCart: ProductsInCart
}
const Header = ({ productsInCart }: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Container>
                <Toolbar>
                    <Logo />
                    <Menu productsInCart={productsInCart} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
