import React from 'react';

import {MoviesInfo} from "../components/MoviesContainer/MoviesInfo";
import {MovieCredits} from "../components/MovieCreditsContainer/MovieCredits";
// @ts-ignore
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