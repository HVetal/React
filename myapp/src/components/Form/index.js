import {useEffect, useRef, useState } from "react";
import { FormPresent } from "./formPresent";

export const Form = ({ onSubmit }) => {
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
        <FormPresent handleSubmit={handleSubmit} ref={textField} value={value} handleChange={handleChange} />
    )
}