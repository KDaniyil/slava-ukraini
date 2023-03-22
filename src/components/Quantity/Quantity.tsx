import { Button, TextField } from '@mui/material'
import "./Quantity.scss"

type Props = {
    count: number
    onDecrement: () => void
    onIncrement: () => void
    minCount?: number
}
const Quantity = ({ count, onDecrement, onIncrement, minCount = 1 }: Props) => {
    return (
        <div className='quantity'>
            <TextField size="small" value={count} className="count-input" />
           <div className='count-btns'>
           <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <Button
                variant="outlined"
                onClick={() => onIncrement()}
                disabled={count >= 9}
            >
                +
            </Button>
           </div>
        </div>
    )
}
export default Quantity
