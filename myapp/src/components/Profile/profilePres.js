import { Form } from "../Form"

export const ProfilePresent = ({ handleClick, showName, name, setShowName, handleChangeShowName, handleChangeName }) => {
    return (
    <>
    <div>
        <h2>Profile page body</h2>
        <div>
            <button onClick={handleClick}>Change theme</button>
        </div>
        <div>
            {showName && <span>{name}</span>}
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
                />
                <span>Show Name</span>
            <button onClick={handleChangeShowName}>Change show name</button>
        </div>
        <Form onSubmit={handleChangeName} />
    </div>
    </>
    )
}