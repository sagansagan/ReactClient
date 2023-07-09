import * as React from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import * as URL from './ApiCalls';
import Movie from './Movie';

function PersonMovie(){
    const [movie, setMovie] = React.useState({ data: [] });
    let { firstName } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
          const result = await axios(URL.GET_RATINGS_BY_FIRSTNAME(firstName));
          setMovie(result);
          console.log(result);
        };
        fetchData();
      }, []);

    return (
        <>
        <h1>Rated movies:</h1>
        {movie.data.map(movie =>
            <Movie movie={movie.movie} rating={movie.rating}/>
        )}
        </>
    );
}
export default PersonMovie;