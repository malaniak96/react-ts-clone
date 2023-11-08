const baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWRmYjM1MGYyMzkyOWFlZDZkNTFmZjIyMzBmYmU1MiIsInN1YiI6IjY1NDhkZDc0OTI0Y2U2MDEzYmI3NWM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zI7cgd7iUS14Rj7Gm_aDnFkD6VJwx-fD8WzbEkfKT-w';

const imgUrl = 'https://image.tmdb.org/t/p/w185';
const movie = '/discover/movie';
const genre = '/genre/movie/list';

const urls = {
    movie:{
        base: movie,
        imgUrl,
        byId: (id:number):string => `${movie}/${id}`
    },
    genre: {
        base:genre
    }
}


export {
    baseURL,
    urls,
    API_KEY
}