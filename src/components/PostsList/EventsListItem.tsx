import { Button, Card, CardActions, CardContent } from '@mui/material'

type Props = {}
const EventsListItem = (props: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="event-title"></div>
                <div className="event-title"></div>
            </CardContent>
            <CardActions>
                <Button size="small">Leggi</Button>
            </CardActions>
        </Card>
    )
}
export default EventsListItem
