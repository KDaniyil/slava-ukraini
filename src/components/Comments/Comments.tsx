import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import './Comments.scss'

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
            alert('Tutti i campi devono essere compilati!')
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
                    <Card className='newComment' variant="outlined" key={index}>
                        <CardContent>
                            <div>Nome: {comment.name}</div>
                            <p>{comment.text}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form className="comments-form" onSubmit={onSend}>
                <Typography variant="h5" component="h5">
                    Lascia un commento:
                </Typography>
                <div className="comments-form-elements">
                    <TextareaAutosize
                        minRows={10}
                        placeholder="Scrivi qui un commento"
                        value={newComment.text}
                        onChange={handleText}
                    />
                    <div className="elem">
                        <TextField
                            className='elem-input-name'
                            label="Nome"
                            value={newComment.name}
                            onChange={handleName}
                            placeholder="Tuo Nome"
                        />
                        <Button
                            className="comments-btn"
                            variant="outlined"
                            type="submit"
                        >
                            Invia
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Comments
