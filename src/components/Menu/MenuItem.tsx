import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <Button className='menu-button'>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
            >
                {children}
            </NavLink>
        </Button>
    )
}
export default MenuItem
