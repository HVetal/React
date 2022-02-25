// import { store } from "../../store";

import { useDispatch, useSelector } from "react-redux";

export const Profile = () => {
    
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    console.log(data);

    const handleChangeShowName = () => {
        dispatch(changeShowName)
    }

    const handleClick = () => {
        setMessaeColor((prevColor) => ())
    }
    // const storeState = store.getState();
    // console.log('store', storeState);
    return (
        <>
        <h2>Profile page body</h2>;
        <button onClick={handleClick}></button>
        </>
    );
};

