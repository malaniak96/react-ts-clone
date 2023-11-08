import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";
import {MovieInfoPage} from "./pages/MovieInfoPage";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element:<Navigate to={'movie'}/>},
            {path:'movie', element: <MoviesPage/>},
            {path:'movie/:id', element: <MovieInfoPage/>},
            {path:'genres', element:<GenresPage/>},
            {path:'search', element: <SearchPage/>}
        ]}
]);

export {
    router
}