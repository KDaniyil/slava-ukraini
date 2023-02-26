import { Button } from '@mui/material'
import './Menu.scss'
import Logo from 'components/Logo/Logo'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">CHI SIAMO</Button>
            <Button color="inherit">EVENTI & NEWS</Button>
            <Button color="inherit">CONTATTI</Button>
            <Button color="inherit">SHOPPING</Button>
            <Button color="inherit" className="btn-dona">
                DONA
            </Button>
        </>
    )
}
export default Menu
