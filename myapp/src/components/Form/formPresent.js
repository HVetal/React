export const FormPresent = ({ handleSubmit, value, handleChange, textField }) => {
return (
    <form onSubmit={handleSubmit}>
        <input value={value} textField={textField} onChange={handleChange} type="text" />
        <input type="submit" />
    </form>
)
}