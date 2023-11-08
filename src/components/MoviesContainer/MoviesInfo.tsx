import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {MovieInfo} from "./MovieInfo";
import {IMovie} from "../../interfaces/movieInterface";

interface IProps {
    movie: IMovie;
}
const MoviesInfo:FC<IProps> = () => {

    const [getMovies, setGetMovies] = useState<IMovie[]>([]);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            const idAsNumber = parseInt(id, 10);
            if (!isNaN(idAsNumber)) {
                movieService.getById(idAsNumber).then(({ data }) => setGetMovies(data.results))
            }
        }
    }, [id]);


    return (
        <div>
            {getMovies.map(movie => <MovieInfo movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MoviesInfo};