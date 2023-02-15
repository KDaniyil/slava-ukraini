import { Container, AppBar, Toolbar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import './Header.scss'
import Menu from 'components/Menu/Menu'
type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar position="sticky" className="app-bar">
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
