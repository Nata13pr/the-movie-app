const baseURL='https://api.themoviedb.org/3';


const movies='/discover/movie';
const genres='/genre/movie/list';
const search='/search/keyword';
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