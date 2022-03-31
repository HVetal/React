import { onValue, set } from "@firebase/database";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { auth, getProfileNameRef, logout, 
    // profileNameRef,
     profileRef, 
     profileShowNameRef } from "../../services/firebase";
import { changeName, changeShowName, CHANGE_SHOW_NAME } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { Form } from "../Form";
import { ThemeContext } from "../utils/ThemeContext";
import { ProfilePresent } from "./profilePres"

export const Profile = ({ onLogout }) => {
    const { setMessageColor } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [showName, setShowName] = useState(false);
    
    // const dispatch = useDispatch();

    // const showName = useSelector(selectShowName, shallowEqual);
    // const showName = useSelector(selectShowName, (prev, current) => prev === current);
    // const name = useSelector(selectName);

    const handleChangeShowName = () => {
        // dispatch(changeShowName);
        
        set(profileShowNameRef, !showName);
    }

    const handleClick = () => {
        setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
    }

    const handleChangeName = (text) => {
        // dispatch(changeName(text));
        // setShowName(text);
        // console.log("auth.currentUser", auth.currentUser);
        set(getProfileNameRef(auth.currentUser.uid), text);
    };

    // useEffect(() => {
    //     const unsubscribeName = onValue(profileNameRef, (snapshot) => {
    //         console.log(snapshot.val());
    //         setName(snapshot.val());
    //     });
    //     const unsubscribeShowName = onValue(profileShowNameRef, (snapshot) => {
    //         console.log(snapshot.val());
    //         setShowName(snapshot.val());
    //     });

    //     // const unsubscribeProfile = onValue(profileRef, (snapshot) => {
    //     //     console.log(snapshot.val());
    //     // })

    //     return () => {
    //         unsubscribeName();
    //         unsubscribeShowName();
    //         // unsubscribeProfile();
    //     }
    // }, []);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (e) {
            console.warn(e);
        }
    };

    // const setShowName = (name) => {
    //     dispatch({
    //         type: CHANGE_SHOW_NAME,
    //     });
    //   };

    return (
      <ProfilePresent handleClick={handleClick} showName={showName} name={name} setShowName={setShowName} handleChangeShowName={handleChangeShowName} handleChangeName={handleChangeName} handleLogout={handleLogout} />
    );
};

