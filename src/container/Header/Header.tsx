import { Container, AppBar, Toolbar } from '@mui/material'
import './Header.scss'
import Menu from 'components/Menu/Menu'
import Logo from 'components/Logo/Logo'

const Header = () => {
    return (
        <AppBar position="sticky" className="app-bar">
            <Container>
                <Toolbar>
                    <Logo />
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
