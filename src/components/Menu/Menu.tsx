import { Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import './Menu.scss'
import Logo from 'components/Logo/Logo'

type Props = {}
const Menu = (props: Props) => {
    return (
        <div className="menu">
            <Logo />
            <div className="menu-btns">
                <Button color="inherit">HOME</Button>
                <Button color="inherit">CHI SIAMO</Button>
                <Button color="inherit">COSA FACCIAMO</Button>
                <Button color="inherit">EVENTI & NEWS</Button>
                <Button color="inherit">CONTATTI</Button>
                <Button color="inherit" className="menu-dona">
                    DONA
                </Button>
            </div>
            <div className="menu-icons">
                <FacebookIcon color="primary" fontSize="large" />
                <InstagramIcon color="secondary" fontSize="large" />
            </div>
        </div>
    )
}
export default Menu
