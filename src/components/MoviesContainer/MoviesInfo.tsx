import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {MovieInfo} from "./MovieInfo";
import {IMovie} from "../../interfaces/movieInterface";

const MoviesInfo = () => {

    const [getMovies, setGetMovies] = useState<IMovie[]>([]);
    const {id} = useParams();

    useEffect(() => {
        movieService.getById(id).then(({data})=> setGetMovies(data.results))
    }, [id]);


    return (
        <div>
            {getMovies.map(movie => <MovieInfo movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MoviesInfo};