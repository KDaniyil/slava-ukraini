import FacebookIcon from '@mui/icons-material/Facebook'
import { Link } from 'react-router-dom'
import './MenuIcons.scss'
type Props = {}
const MenuIcons = (props: Props) => {
    return (
        <div className="menu-icons">
            <p>Follow Us</p>
            <Link target="_blank" to="https://www.facebook.com/profile.php?id=100079580318208"><FacebookIcon className="icon-fb" fontSize="large" /></Link>
            
        </div>
    )
}
export default MenuIcons
