import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import "./LinkButton.scss"

type Props = {
    to: string
    children: React.ReactNode
}

const LinkButton = ({ to, children }: Props) => {
    return (
        <>
            <Button size='small' className='link-button'>
              <Link to={to}>{children}</Link>
            </Button>
        </>
    )
}

export default LinkButton
