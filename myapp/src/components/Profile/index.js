import { useContext } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeName, changeShowName, CHANGE_NAME, CHANGE_SHOW_NAME } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form";
import { ThemeContext } from "../utils/ThemeContext";

export const Profile = () => {
    const { setMessageColor } = useContext(ThemeContext);
    
    const dispatch = useDispatch();
    // const { showName, name } = useSelector((state) => state);
    const showName = useSelector(selectShowName, shallowEqual);
    // const showName = useSelector(selectShowName, (prev, current) => prev === current);
    const name = useSelector(selectName);

    const handleChangeShowName = () => {
        dispatch(changeShowName);
    }

    const handleClick = () => {
        setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
    }

    const handleChangeName = (text) => {
        dispatch(changeName(text));
    };

    const setShowName = (name) => {
        dispatch({
            type: CHANGE_SHOW_NAME,
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

