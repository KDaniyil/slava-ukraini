import { Button, Menu } from '@mui/material'
import { useState } from 'react'
import MenuItem from './MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

type Props = {}

const DropdownMenu = (props: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <Button
                id="drop-button"
                aria-controls={open ? 'drop-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="menu-item"
                endIcon={<KeyboardArrowDownIcon />}
            >
                EVENTI & NEWS
            </Button>
            <Menu
                id="drop-menu"
                className='drop-submenu'
                aria-labelledby="drop-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'drop-button',
                }}
            >
                <MenuItem to="category/testimonianze">Testimonianze</MenuItem>
                <MenuItem to="category/raccolta">Raccolta</MenuItem>
                <MenuItem to="category/news">News</MenuItem>
                <MenuItem to="posts">Tutto</MenuItem>
            </Menu>
        </div>
    )
}

export default DropdownMenu
