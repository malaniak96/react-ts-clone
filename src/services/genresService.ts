import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";
import {IGenre} from "../interfaces/genreInterface";
import {IRes} from "../types/IResType";

const genresService = {
    getAll: (): IRes<IGenre> => axiosService.get(urls.genre.base)
}

export {
    genresService
}