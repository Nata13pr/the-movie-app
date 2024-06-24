const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const tv='/discover/tv';
const genres = '/genre/movie/list';
const search = '/search/multi';
const findById = '/movie';


const urls = {
    movies: {
        base: movies
    },
    tv:{
        base:tv
    },
    genres: {
        base: genres
    },
    search: {
        base: search
    },
    findById: {
        base: findById
    },

}

export {
    baseURL,
    urls
}