import {IRes} from "../types/IResType";
import {IMovieRes} from "../interfaces/movieInterface";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const movieService = {
    getAll:(page: string):IRes<IMovieRes> => axiosService.get(urls.movie.base, {params:{page}}),
    getById: (id:number):IRes<IMovieRes> => axiosService.get(urls.movie.byId(id)),
}



export {
    movieService
}