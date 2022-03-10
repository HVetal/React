import { useEffect, useState } from "react";
import { apiUrl } from "../utils/constants";

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch(apiUrl).then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(result => setArticles(result))
        .catch((err) => {
            console.warn(err);
        })
    }, []);
    return (
        <>
          <h3>Articles</h3>
          <ul>
              {articles.map((art) =>(
                  <li key={art.id}>{art.title}</li>
              ))}
          </ul>
        </>
    );
};