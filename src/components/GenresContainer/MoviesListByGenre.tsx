import React, {FC, useEffect, useState} from 'react';
import {NavLink, useParams, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {genresService} from "../../services";
import {urls} from "../../constants";
import css from './Genre.module.css';

const MoviesListByGenre:FC = () => {

    const {genreId } = useParams<{ genreId: string }>();
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});

    const page: string  = query.get('page') || '1';
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        genresService
            .getById(+`${genreId}`, +page)
            .then(({data}) => {
                setMovies(data.results)
                setTotalPages(data.total_pages)
                }
            )
    }, [genreId, page]);

    const handlePagePrev = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }

    return (
        <div>
            <ul className={css.ul}>
                {movies.map((movie) => (
                    <li className={css.movieG} key={movie.id}>
                        <NavLink to={`/movie/${movie.id}?language=en-US`}><img className={css.img} src={movie.poster_path?`${urls.movie.imgUrl}${movie.poster_path}`: `https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg`} alt={movie.original_title}/></NavLink>
                        <h6 className={css.titleM}>{movie.original_title}</h6>
                    </li>
                ))}
            </ul>
            <div className={css.btns}>
                <button className={css.btn} onClick={handlePagePrev} disabled={page === '1'}> &lt; </button>
                <span> Page: {page}</span>
                <button className={css.btn} onClick={handlePageNext} disabled={page === `${totalPages}`}> &gt; </button>
            </div>
        </div>
    );
};

export {MoviesListByGenre};