import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import { Link } from 'react-router-dom'
import "./ContactsDetails.scss"
import Map from 'components/Map/Map'

type Props = {}

const ContactsDetails = (props: Props) => {
    return (
        <>
        <Map/>
            <ul className="contacts-list">
                <li className="address">
                    <LocationOnOutlinedIcon fontSize="small" /> CORSO DEL POPOLO
                    84 45100 ROVIGO ITALIA
                </li>
                <li className="email">
                    <Link to="mailto:slavaukrainiodv@gmail.com"><LocalPostOfficeOutlinedIcon fontSize="small" />{' '}
                    slavaukrainiodv@gmail.com</Link>
                </li>
                <li className="phone">
                    <LocalPhoneOutlinedIcon fontSize="small" /> +39 380 791 4144
                </li>
            </ul>
        </>
    )
}

export default ContactsDetails
