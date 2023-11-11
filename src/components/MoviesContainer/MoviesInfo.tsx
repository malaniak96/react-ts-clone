import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo} from "./MovieInfo";
import {IGenre, IMovie} from "../../interfaces";
import {genresService, movieService} from "../../services";






const MoviesInfo:FC = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {id} = useParams();


    useEffect(() => {
        movieService.getById(+`${id}`).then(({ data }) => {setMovie(data); console.log(data, 'this is data')});

    }, [id]);

    useEffect(() => {
        genresService.getAll()
            .then(({ data }) => {
                setGenres(data.genres);
            })
    }, []);

    return (
        <div>
            {movie && <MovieInfo movie={movie} genres={genres} key={movie.id}/>}
        </div>
    );
};

export {MoviesInfo};

