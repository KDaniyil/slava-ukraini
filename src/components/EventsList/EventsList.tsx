import { Typography } from '@mui/material'
import EventsListItem from './EventsListItem'
import 'utils/events.ts'
import { eventsArray } from 'utils/events'

type Props = {}
const EventsList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2">
                Eventi & News
            </Typography>
            <EventsListItem eventTitle={''} eventData={''} />
        </>
    )
}
export default EventsList
