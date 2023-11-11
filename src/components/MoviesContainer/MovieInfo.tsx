import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {urls} from "../../constants";
import {StarsRating} from "./StarsRating";
import {IGenre, IMovie} from "../../interfaces";
import css from './Movies.module.css';


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
        return `${hours}h ${minutes}min`;
    };

    const formattedDuration = formatDuration(runtime);

    return (
        <ul className={css.ulInfo}>
          <div className={css.movieDetails}>
              <li><img className={css.imageInfo} src={imageMovie} alt={original_title}/></li>
              <li className={css.titleInfo}>{original_title}</li>
              <li className={css.overview}>{overview}</li>
          </div>
            <div className={css.movieAdditional}>
                <li className={css.vote}> <StarsRating value={vote_average}/>  <div className={css.rating}>Rating: <div className={css.descriptions}>{vote_average}</div></div></li>
                <li className={css.genres}> Genres:<div className={css.descriptions}>{genres && genres.map(genre => <NavLink className={css.descriptions} key={genre.id} to={`/genre/${genre.id}`} >{genre.name}</NavLink>)}</div> </li>
                <li className={css.release}> Release Date:<div className={css.descriptions}>{release_date}</div></li>
                <li className={css.release}> Duration:<div className={css.descriptions}>{formattedDuration}</div></li>
            </div>
        </ul>
    );
};

export {MovieInfo};

