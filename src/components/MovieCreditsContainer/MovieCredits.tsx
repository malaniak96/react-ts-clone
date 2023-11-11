import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {MovieCredit} from "./MovieCredit";
import {IActor} from "../../interfaces/creditInterface";

import css from './MovieCredits.module.css';

const MovieCredits:FC<{}> = () => {

    const [movieCredits, setMovieCredits] = useState<IActor[]>([]);
    const {id} = useParams();

    useEffect(() => {
        movieService.getMovieCreditById(+`${id}`).then(({data}) => {setMovieCredits(data.cast)})
    }, [id]);


    return (
        <>
        <h1>The Main Cast:</h1>
        <ul className={css.movieCredits}>
            {movieCredits.map(movieCredit => <MovieCredit {...movieCredit} key={movieCredit.id}/>)}
        </ul>
        </>
    );
};

export {MovieCredits};