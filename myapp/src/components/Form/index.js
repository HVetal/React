import { useState } from "react"

export const Form = ({ onSubmit }) => {
    const [author, setValueName] = useState('');
    const [text, setValueText] = useState('');

    const handleChangeName = (event) => {
        setValueName(event.target.value);
    }

    const handleChangeText = (event) => {
        setValueText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({author, text});

    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name author" author={author} onChange={handleChangeName} type="text" />
            <input placeholder="Text author"text={text} onChange={handleChangeText} type="text" />
            <input type="submit" />
        </form>
    )
}