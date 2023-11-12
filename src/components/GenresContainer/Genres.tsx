import React, {useEffect, useState} from 'react';

import {IGenre} from "../../interfaces";
import {Genre} from "./Genre";
import {genresService} from "../../services";
import css from './Genre.module.css';

const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genresService
            .getAll()
            .then(({data}) =>
                setGenres(data.genres));
    }, []);

    return (
        <div className={css.genresPage}>
            {genres.map((genre) => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};