import React from 'react';

import {MoviesInfo} from "../components/MoviesContainer/MoviesInfo";
import {MovieCredits} from "../components/MovieCreditsContainer/MovieCredits";

import css from './Pages.module.css';

const MovieInfoPage = () => {

    return (
        <div className={css.movieInfo}>
            <MoviesInfo/>
            <MovieCredits/>
        </div>
    );
};

export {MovieInfoPage};