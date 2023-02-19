import { Button } from '@mui/material'
import './Menu.scss'
import Logo from 'components/Logo/Logo'
import MenuIcons from 'components/MenuIcons/MenuIcons'

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
            <MenuIcons />
        </div>
    )
}
export default Menu
