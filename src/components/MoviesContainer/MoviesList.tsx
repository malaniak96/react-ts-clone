import React, {useEffect, useState} from 'react';

import {useSearchParams} from "react-router-dom";

import {movieService} from "../../services/movieService";
import {Movie} from "./Movie";
import {IMovie} from "../../interfaces/movieInterface";
// @ts-ignore
import css from './Movies.module.css';


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page: string  = query.get('page') || '1';
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
       movieService.getAll(page).then(({data}) => {
           setMovies(data.results)
           setTotalPages(data.total_pages)
       });
    }, [page]);

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
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </ul>
           <div className={css.btns}>
               <button className={css.btn} onClick={handlePagePrev} disabled={page === '1'}> &lt; </button>
                    <span> Page: {page} out of 40863</span>
               <button className={css.btn} onClick={handlePageNext} disabled={page === `${totalPages}`}> &gt; </button>
           </div>
        </div>
    );


};

export {MoviesList};