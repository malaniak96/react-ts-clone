import React from 'react';
import {useAppLocation} from "../hooks/useAppLocation";
import {IMovie} from "../interfaces/movieInterface";
import {MoviesInfo} from "../components/MoviesContainer/MoviesInfo";



const MovieInfoPage = () => {
    const {state} = useAppLocation<{movie: IMovie }>();
    const movie = state && state.movie;

    return (
        <div>
            {movie && <MoviesInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};