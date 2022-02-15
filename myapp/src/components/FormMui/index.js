import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
          <TextField  inputRef={textField} className="form_text-field" id="outlined-basic"  variant="outlined" value={value} onChange={handleChange} />
          <Button className="form_button" type="submit">Send</Button>
        </form>
    )
}