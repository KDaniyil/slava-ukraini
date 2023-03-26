import logo from 'assets/logo.png'
import { Link } from 'react-router-dom'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Link to="/">
            <img
                style={{ height: '75px', width: '75px' }}
                src={logo}
                alt="logo"
            />
        </Link>
    )
}
export default Logo
