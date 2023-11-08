import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
import { urls } from '../../constants/urls';
import {NavLink} from "react-router-dom";

interface IProps {
  movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {poster_path, original_title, vote_average} = movie;


    return (
        <li>
           <NavLink to={'/movie/:id'}> <img src={`${urls.movie.imgUrl}${poster_path}`} alt={original_title}/></NavLink>
            <div>{original_title}</div>
            <div>{vote_average}</div>
        </li>
    );
};

export {Movie};