import React, {FC} from 'react';

import {urls} from "../../constants/urls";

import css from './MovieCredits.module.css';

interface IProps {
    profile_path:string,
    original_name:string,
    character:string,
}

const MovieCredit:FC<IProps> = ({profile_path,original_name, character}) => {

    const imageActor = profile_path
        ? `${urls.movie.imgUrl}${profile_path}`
        : `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`

    return (
        <li className={css.ul}>
            <div><img className={css.image} src={imageActor} alt={original_name}/></div>
            <div className={css.name}>{original_name}</div>
            <div>
                <h2>Character Played:</h2>
                <p>{character}</p>
            </div>
        </li>
    );
};

export {MovieCredit};