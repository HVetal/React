import { Button, TextField } from "@mui/material";
import {useEffect, useRef, useState } from "react";
import "./styles.css";

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
          <TextField ref={textField} className="form_text-field" id="outlined-basic" label="Outlined" variant="outlined" value={value} onChange={handleChange} focused />
          <Button className="form_button" variant="outlined" type="submit">Send</Button>
        </form>
    )
}