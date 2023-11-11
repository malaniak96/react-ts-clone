import React, {FC} from 'react';

import {NavLink} from "react-router-dom";

import {IMovie} from "../../interfaces/movieInterface";
import { urls } from '../../constants/urls';

import css from './Movies.module.css';
import {StarsRaiting} from "./StarsRaiting";



interface IProps {
  movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, poster_path, original_title, vote_average, release_date} = movie;

    const date = new Date(release_date);
    const year = date.getFullYear();

    const imageMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`;


    return (
        <li className={css.movie}>
            <div>{year}</div>
            <NavLink to={`/movie/${id}?language=en-US`}> <img className={css.img} src={imageMovie} alt={original_title}/></NavLink>
            <div className={css.title}>{original_title}</div>
            <div><StarsRaiting value={vote_average}/></div>
        </li>
    );
};

export {Movie};