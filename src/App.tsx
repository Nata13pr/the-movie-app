import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/reduxHooks";
import {useDispatch} from "react-redux";
import {movieActions} from "./redux/slices/movieSlice";

function App() {
  const {movies}=useAppSelector(state => state.movie)
  console.log(movies)
const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(movieActions.getAll())
  }, [dispatch]);
  console.log(movies)
  return (
    <div className="App">

    </div>
  );
}

export default App;
