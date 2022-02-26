import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowName, CHANGE_NAME, TOGGLE_SHOW_NAME } from "../../store/profile/actions";
import { Form } from "../Form";
import { ThemeContext } from "../utils/ThemeContext";

export const Profile = () => {
    const { setMessageColor } = useContext(ThemeContext);
    
    const dispatch = useDispatch();
    const { showName, name } = useSelector((state) => state);
    // console.log(data);

    const handleChangeShowName = () => {
        dispatch(changeShowName);
    }

    const handleClick = () => {
        setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
    }

    const handleChangeName = (text) => {
        dispatch({
            type: CHANGE_NAME,
            payload: text
        });
    };

    const setShowName = (name) => {
        dispatch({
            type: TOGGLE_SHOW_NAME,
        });
      };

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
    );
};

