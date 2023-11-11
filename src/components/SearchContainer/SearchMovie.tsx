import React, {FC} from 'react';

import {NavLink} from "react-router-dom";

import {IMovie} from "../../interfaces/movieInterface";
import {urls} from "../../constants/urls";

import css from './Search.module.css'

interface IProps{
    movie: IMovie
}

const SearchMovie:FC<IProps> = ({movie}) => {

    const {id,poster_path, original_title} = movie;

    const imageMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`;

    return (
        <li className={css.movie}>
            <NavLink to={`/movie/${id}?language=en-US`}><img className={css.img} src={imageMovie} alt={original_title}/></NavLink>
            <h2 className={css.title}>{movie.original_title}</h2>
        </li>
    );
};

export {SearchMovie};