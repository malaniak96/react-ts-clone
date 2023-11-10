import React from 'react';
import {MoviesList} from "../components/MoviesContainer/MoviesList";
import {MoviesListByGenre} from "../components/GenresContainer/MoviesListByGenre";

const MoviesFromGenresPage = () => {
    return (
        <div>
        <MoviesListByGenre/>
        </div>
    );
};

export {MoviesFromGenresPage};