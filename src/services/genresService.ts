import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";
import {IGenres} from "../interfaces/genreInterface";
import {IRes} from "../types/IResType";
import {IMovieRes} from "../interfaces/movieInterface";


const genresService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre.base),
    getById:(genreId:number, page: number):IRes<IMovieRes> => axiosService.get(urls.genre.byId(genreId), {params:{page}})
}

export {
    genresService
}