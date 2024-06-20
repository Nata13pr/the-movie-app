const baseURL='https://api.themoviedb.org/3';


const movies='/discover/movie';
const genres='/genres/movie/list';
const search='/search';
const findById='/movie'


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
    findById:{
        base:findById
    }
}

export {
    baseURL,
    urls
}