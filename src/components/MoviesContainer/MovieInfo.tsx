import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";
// @ts-ignore
import css from './Movies.module.css';
import {urls} from "../../constants/urls";

import {StarsRaiting} from "./StarsRaiting";

import {IGenre} from "../../interfaces/genreInterface";


interface IProps {
    movie: IMovie;
    genres: IGenre[],
}

const MovieInfo: FC<IProps>  = ({movie, genres}) => {
    const {poster_path, original_title, overview, vote_average, genre_ids, release_date} = movie;


    const imageMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`;


    console.log('Genres:', genres);
    console.log('Genre IDs:', genre_ids);

    return (
        <ul className={css.ulInfo}>
            <li><img className={css.imageInfo} src={imageMovie} alt={original_title}/></li>
            <li className={css.titleInfo}>{original_title}</li>
            <li className={css.overview}>{overview}</li>
            <li className={css.vote}> <StarsRaiting value={vote_average}/>  Rating:<br/><br/> {vote_average}</li>
            <li className={css.genres}> Genres:<br/><br/> {genre_ids && genre_ids.map((id) => genres.find((genre) => genre.id === id)?.name).join(', ')} </li>
            <li className={css.release}> Release Date:<br/><br/> {release_date}</li>
        </ul>
    );
};

export {MovieInfo};