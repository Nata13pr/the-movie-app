const baseURL='https://api.themoviedb.org';


const movies='/3/discover/movie';
const genres='/3/genre/movie/list';
const search='/3/search';
const poster='t/p';

const urls={
    movies:{
        base:movies
    },
    genres:{
        base: genres
    },
    search:{
        base:search
    },
    poster:{
        base:poster
    }
}

export {
    baseURL,
    urls
}