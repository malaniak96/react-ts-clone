import React, {FormEvent, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {movieService} from "../../services/movieService";
import {IMovie} from "../../interfaces/movieInterface";
import {SearchForm} from "./SearchForm";

import {SearchMovie} from "./SearchMovie";

import css from "../MoviesContainer/Movies.module.css";



const SearchMovies = () => {
    const [movies, setMovies]  = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1)
    const [params, setParams] = useSearchParams({page: '1', query: ''});

    const page: string  = params.get('page') || '1';
    const query: string = params.get('query') || '';

    const searchMovies = (queryParam:string, pageParam: string) => {
        movieService.getMoviesFromSearch(queryParam, pageParam)
            .then(({ data }) => {
                setMovies(data.results);
                setTotalPages(data.page);
            });
    };

    useEffect(() => {
        if (query) {
            searchMovies(query, page);
        } else {
            movieService.getTrendingMovies(query, page).then(({data}) => {
                setMovies(data.results);
                setTotalPages(data.page);
            })
        }
    }, [query,page]);


    const handlePagePrev = () => {
        setParams(prev => {
            prev.set('page', `${+page - 1}`)
            return prev
        })
    }

    const handlePageNext = () => {
        setParams(prev => {
            prev.set('page', `${+page + 1}`)
            return prev
        })
    }
    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form) {
            const queryInput = form.elements.namedItem('search') as HTMLInputElement;
            const query: string = queryInput?.value || '';

            setParams((prev) => {
                prev.set('query', query);
                prev.set('page', '1');
                return prev;
            });
        }
    };

    return (
        <div>
            <div>
                <SearchForm onSubmit={handleSearchSubmit}/>
            </div>
            <ul className={css.ul}>
                {movies.map(movie => <SearchMovie key={movie.id} movie={movie}/>)}
            </ul>
            <div className={css.btns}>
                <button className={css.btn} onClick={handlePagePrev} disabled={page === '1'}> &lt; </button>
                    <span> Page: {page}</span>
                <button className={css.btn} onClick={handlePageNext} disabled={page === `${totalPages}`}> &gt; </button>
            </div>
        </div>
    );
};

export {SearchMovies};