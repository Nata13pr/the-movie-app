import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/reduxHooks";
import {useDispatch} from "react-redux";
import {movieActions} from "./redux/slices/movieSlice";
import {genreActions} from "./redux/slices/genreSlice";

function App() {
  const {movies}=useAppSelector(state => state.movie)
  console.log(movies)
  const {genres}=useAppSelector(state => state.genre)
const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(movieActions.getAll());
    dispatch(genreActions.getAll())
  }, [dispatch]);
  console.log('11111111111111111111111111',movies)
  console.log('222222222222222222222',genres)
  return (
    <div className="App">

    </div>
  );
}

export default App;
