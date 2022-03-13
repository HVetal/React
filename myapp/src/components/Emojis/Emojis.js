import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmojis } from "../../store/emojis/actions";
import { selectEmojis, selectEmojisLoading, selectError } from "../../store/emojis/selectors";

export const Emojis = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const isLoading = useSelector(selectEmojisLoading);
    const emojis = useSelector(selectEmojis);

const getData = async () => {
    dispatch(getEmojis());
};

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
          <h3>Emojis</h3>
          {/* <div><button onClick={getData}>Refresh</button></div> */}
            {error && (<div><h5>Error: {error.message}</h5><button onClick={getData}>Refresh</button></div>)}
            {isLoading ? (
            <CircularProgress />
            ) :  (
            <ul>
              {emojis.map((em) =>(
                  <li key={em.unicode}>{em.name}
                  </li>
              ))}
          </ul>
          )}
        </>
    );
};