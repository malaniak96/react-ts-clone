import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {MovieInfo} from "./MovieInfo";
import {IMovie} from "../../interfaces/movieInterface";
import {genresService} from "../../services/genresService";
import {IGenre} from "../../interfaces/genreInterface";




const MoviesInfo:FC<{}> = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {id} = useParams();

    // const { genreId } = useParams<{ genreId: string }>();

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

