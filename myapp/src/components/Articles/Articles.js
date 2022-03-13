import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesLoading, selectError } from "../../store/articles/selectors";
import { apiUrl } from "../utils/constants";

export const Articles = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const isLoading = useSelector(selectArticlesLoading);
    const articles = useSelector(selectArticles);

const getData = async () => {
    dispatch(getArticles());
};

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
          <h3>Articles</h3>
          <div><button onClick={getData}>Refresh</button></div>
            {error && <h5>Error: {error.message}</h5>}
            {isLoading ? (
            <CircularProgress />
            ) :  (
            <ul>
              {articles.map((art) =>(
                  <li key={art.id}>{art.title}
                  </li>
              ))}
          </ul>
          )}
        </>
    );
};
// import { CircularProgress } from "@mui/material";
// import { useEffect, useState } from "react";
// import { apiUrl } from "../utils/constants";

// export const Articles = () => {
//     const [articles, setArticles] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(false);
//     useEffect(() => {
//         setIsLoading(true);
//         setError(false);
//         fetch(apiUrl).then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .then(result => setArticles(result))
//         .catch((err) => {
//             setError(true);
//             console.warn(err);
//         })
//         .finally(() => {
//             setIsLoading(false);
//         });
//     }, []);
//     return (
//         <>
//           <h3>Articles</h3>
//             {error && <h5>Error</h5>}
//             {isLoading ? (
//             <CircularProgress />
//             ) :  (
//             <ul>
//               {articles.map((art) =>(
//                   <li key={art.id}>{art.title}</li>
//               ))}
//           </ul>
//           )}
//         </>
//     );
// };