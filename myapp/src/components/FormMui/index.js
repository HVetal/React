import { Button, TextField } from "@mui/material";
import {useEffect, useRef, useState } from "react"

export const FormMui = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const textField = useRef();

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue("");
    }

    useEffect(() => {
        textField.current?.focus();
    }, [onSubmit]);

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} ref={textField} onChange={handleChange} type="text"/>
            <input type="submit" />
        </form>
    )
}