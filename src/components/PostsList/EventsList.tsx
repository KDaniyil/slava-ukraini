import { Typography } from '@mui/material'
import EventsListItem from './EventsListItem'

type Props = {}
const EventsList = (props: Props) => {
    return (
        <Typography variant="h4" align="center" component="h2">
            Eventi & News
            <EventsListItem />
        </Typography>
    )
}
export default EventsList
