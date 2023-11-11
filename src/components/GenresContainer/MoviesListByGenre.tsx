import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces/movieInterface";
import {genresService} from "../../services/genresService";
import {NavLink, useParams, useSearchParams} from "react-router-dom";
import {urls} from "../../constants/urls";

import css from "../MoviesContainer/Movies.module.css";



const MoviesListByGenre:FC<{}> = () => {
    const { genreId } = useParams<{ genreId: string }>();
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
            <h2>Movies by Genre</h2>
            <ul className={css.ul}>
                {movies.map((movie) => (
                    <li className={css.movie} key={movie.id}>
                        <NavLink to={`/movie/${movie.id}?language=en-US`}><img className={css.img} src={`${urls.movie.imgUrl}${movie.poster_path}`} alt={movie.original_title}/></NavLink>
                        <h4 className={css.title}>{movie.original_title}</h4>
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