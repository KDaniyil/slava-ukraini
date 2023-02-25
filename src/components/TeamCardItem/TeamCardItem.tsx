import { Card, CardContent } from '@mui/material'
import { Team } from 'utils/team'
import './TeamCardItem.scss'

type Props = {
    person: Team
}
function TeamCardItem({ person }: Props) {
    return (
        <Card variant="outlined" className="team-card">
            <CardContent>
                <div className="team-card-image">
                    <img src={person.image} alt={person.name} />
                </div>
                <div className="team-card-name">{person.name}</div>
                <div className="team-card-job">{person.job}</div>
            </CardContent>
        </Card>
    )
}
export default TeamCardItem
