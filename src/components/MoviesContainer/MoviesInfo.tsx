import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../services/movieService";
import {MovieInfo} from "./MovieInfo";
import {IMovie} from "../../interfaces/movieInterface";
import {genresService} from "../../services/genresService";
import {IGenre} from "../../interfaces/genreInterface";
import {Genre} from "../GenresContainer/Genre";



const MoviesInfo:FC<{}> = () => {
    const [movie, setMovie] = useState<IMovie | null>(null);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {id} = useParams();



    // useEffect(() => {
    //     movieService
    //         .getById(+`${id}`).then(({ data }) => {
    //         setMovie(data);
    //         return data
    //     })
    //         .then((movie) => {
    //             genresService
    //                 .getAll()
    //                 .then(({data}) => {
    //                     console.log("Fetched genres:", data);
    //                     if (movie && movie.genre_ids) {
    //                         const filteredGenres = data.genres.filter((genre: IGenre) => {
    //                             console.log("Checking genre:", genre.id);
    //                             return movie.genre_ids.includes(genre.id)
    //                         });
    //                         console.log("Filtered genres:", filteredGenres);
    //                         setGenres(filteredGenres);
    //                     }
    //                 })
    //         })
    //
    // }, [id]);
    useEffect(() => {
        Promise.all([
            movieService.getById(+`${id}`),
            genresService.getAll()
        ])
            .then(([movieData, genresData]) => {
                setMovie(movieData.data);
                setGenres(genresData.data.genres);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    console.log("Movie:", movie);
    console.log("Genres:", genres);



    return (
        <div>
            {movie && <MovieInfo movie={movie} genres={genres} key={movie.id}/>}
        </div>
    );
};

export {MoviesInfo};