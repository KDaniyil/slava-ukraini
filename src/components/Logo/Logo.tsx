import { Typography } from '@mui/material'
import { hover } from '@testing-library/user-event/dist/hover'
import logo from 'assets/logo.png'
import { transform } from 'typescript'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
                style={{ height: '75px', width: '75px' }}
                src={logo}
                alt="logo"
            />
        </Typography>
    )
}
export default Logo
