import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import css from '../Movie/Movie.module.css'

const Movies = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(movieActions.getAll())
    }, [dispatch]);
    
    return (
        <div className={css.movies}>

            {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies}