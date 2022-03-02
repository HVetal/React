import { Button } from "@mui/material"
import { useCallback } from "react"

export const DeleteButton = ({ id, onClick }) => {
    const handleClick = useCallback(() => {
        onClick(id)
    }, [onClick, id]);
    return <Button className="delete_btn" onClick={handleClick}>X</Button>
}