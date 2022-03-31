import { Form } from "../Form"

export const ProfilePresent = ({ handleClick, showName, name, setShowName, handleChangeShowName, handleChangeName, handleLogout }) => {
    return (
    <>
    <div>
        <h2>Profile page body</h2>
        <div>
            <button onClick={handleLogout}>LOGOUT</button>
        </div>
        <div >
            <button aria-current="Change theme" onClick={handleClick}>Change theme</button>
        </div>
        <div>
            {showName && <h4>{name}</h4>}
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