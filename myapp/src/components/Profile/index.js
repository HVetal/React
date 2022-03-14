import { useContext } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { logout } from "../../services/firebase";
import { changeName, changeShowName, CHANGE_SHOW_NAME } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form";
import { ThemeContext } from "../utils/ThemeContext";
import { ProfilePresent } from "./profilePres"

export const Profile = ({ onLogout }) => {
    const { setMessageColor } = useContext(ThemeContext);
    
    const dispatch = useDispatch();

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
        // dispatch(changeName(text));
        setShowName(text);
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (e) {
            console.warn(e);
        }
    };

    const setShowName = (name) => {
        dispatch({
            type: CHANGE_SHOW_NAME,
        });
      };

    return (
      <ProfilePresent handleClick={handleClick} showName={showName} name={name} setShowName={setShowName} handleChangeShowName={handleChangeShowName} handleChangeName={handleChangeName} handleLogout={handleLogout} />
    );
};

