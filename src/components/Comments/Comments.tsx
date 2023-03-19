import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'

type Props = {}
export type Comment = {
    name: string
    text: string
}

const Comments = (props: Props) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState<Comment>({
        name: '',
        text: '',
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewComment((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newComment.name === '' || newComment.text === '') {
            alert('all fields are required!')
        } else {
            setNewComment({
                name: '',
                text: '',
            })
            setComments((prevState) => {
                return [...prevState, newComment]
            })
        }
    }
    return (
        <>
            <div>
                {comments.map((comment, index) => (
                    <Card variant="outlined" key={index}>
                        <CardContent>
                            <div>Nome: {comment.name}</div>
                            <p>{comment.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <Typography variant="h5" component="h5">
                    Lascia un commento:
                </Typography>
                <div>
                    <TextareaAutosize
                            minRows={5}
                            placeholder="Scrivi qui"
                            value={newComment.text}
                            onChange={handleText}
                    />
                    <br />
                    <TextField
                        label="Nome"
                        value={newComment.name}
                        onChange={handleName}
                        placeholder="Tuo Nome"
                    />
                    <div>
                    </div>
                    <Button variant="outlined" type="submit">
                        Invia
                    </Button>
                </div>
            </form>
        </>
    )
}
export default Comments
