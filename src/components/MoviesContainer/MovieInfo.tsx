import React, {FC, useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import {useParams, useSearchParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {number} from "joi";


interface IProps {
    movie: IMovie
}
const MovieInfo: FC<IProps>  = ({movie}) => {

    const {poster_path, original_title, overview, vote_average, genre_ids, release_date} = movie;

  

    return (
        <ul>
        <li>{poster_path}</li>
        <li>{original_title}</li>
        <li>{overview}</li>
        <li> Rating: {vote_average}</li>
        <li> Genres: {genre_ids}</li>
        <li> Release Date: {release_date}</li>
        </ul>
    );
};

export {MovieInfo};