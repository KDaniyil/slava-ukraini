import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {
    eventTitle: string
    eventData: string
}
const EventsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="event-title"></div>
                <div className="event-data"></div>
            </CardContent>
            <CardActions>
                <Button size="small">Leggi</Button>
            </CardActions>
        </Card>
    )
}
export default EventsListItem
