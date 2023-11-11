import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movieInterface";

import css from './Movies.module.css';
import {urls} from "../../constants/urls";

import {StarsRaiting} from "./StarsRaiting";

import {IGenre} from "../../interfaces/genreInterface";



interface IProps {
    movie: IMovie;
    genres: IGenre[],
}

const MovieInfo: FC<IProps>  = ({movie}) => {
    const {poster_path, original_title, overview, vote_average, genres, release_date, runtime} = movie;


    const imageMovie = poster_path
        ? `${urls.movie.imgUrl}${poster_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`;

    const formatDuration = (duration: number): string => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}hr ${minutes}min`;
    };

    const formattedDuration = formatDuration(runtime);

    return (
        <ul className={css.ulInfo}>
            <li><img className={css.imageInfo} src={imageMovie} alt={original_title}/></li>
            <li className={css.titleInfo}>{original_title}</li>
            <li className={css.overview}>{overview}</li>
            <li className={css.vote}> <StarsRaiting value={vote_average}/>  Rating:<br/><br/> {vote_average}</li>
            <li className={css.genres}> Genres:<br/>{genres && genres.map(genre => <div className={'genre'} key={genre.id}>{genre.name}</div>)} </li>
            <li className={css.release}> Release Date:<br/><br/> {release_date}</li>
            <li className={css.release}> Duration:<br/><br/> {formattedDuration}</li>
        </ul>
    );
};

export {MovieInfo};

