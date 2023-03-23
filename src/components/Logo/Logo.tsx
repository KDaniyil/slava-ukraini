import { Typography } from '@mui/material'
import logo from 'assets/logo.png'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div">
            <img
                style={{ height: '75px', width: '75px' }}
                src={logo}
                alt="logo"
            />
        </Typography>
    )
}
export default Logo
