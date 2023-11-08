import React from 'react';
import {MovieInfo} from "../components/MoviesContainer/MovieInfo";
import {useAppLocation} from "../hooks/useAppLocation";
import {IMovie} from "../interfaces/movieInterface";




const MovieInfoPage= () => {

    const {state: {movie}} = useAppLocation<{movie: IMovie }>();

    return (
        <div>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};