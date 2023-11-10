import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";
import {IRes} from "../types/IResType";
import {IMovie, IMovieRes, ISearch} from "../interfaces/movieInterface";
import {IMovieCredits} from "../interfaces/creditInterface";


const movieService = {
    getAll:(page: string):IRes<IMovieRes> => axiosService.get(urls.movie.base, {params:{page}}),
    getById:(id:number):IRes<IMovie> => axiosService.get(urls.movie.byId(id)),
    getMovieCreditById:(id:number):IRes<IMovieCredits> => axiosService.get(urls.movie.movieCredits(id)),
    getMoviesFromSearch:(query: string, page: string):IRes<ISearch> => axiosService.get(urls.movie.searchMovie(), {params: {page, query}}),
    getTrendingMovies:(query: string, page: string):IRes<ISearch> => axiosService.get(urls.movie.trending(), {params: {page, query}})
}

export {
    movieService
}