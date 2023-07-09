import * as React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import * as URL from './ApiCalls';
import Genre from './Genre';

function PersonGenres(){
    const [genre, setGenre] = React.useState({ data: [] });
    let { firstName } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
          const result = await axios(URL.GET_GENRES_BY_FIRSTNAME(firstName));
          setGenre(result);
          console.log(result);
        };
        fetchData();
      }, []);

    return (
        <>
        <h1>Linked Genres:</h1>
        {genre.data.map(genre =>
            <Genre key={genre.id} name={genre.name}/>
        )}
        </>
    );
}
export default PersonGenres;