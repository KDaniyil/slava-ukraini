import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import './MenuIcons.scss'
type Props = {}
const MenuIcons = ({}: Props) => {
    return (
        <div className="menu-icons">
            <p>Follow Us</p>
            <FacebookIcon className="icon-fb" fontSize="medium" />
        </div>
    )
}
export default MenuIcons
