import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {Movie} from "../Movie/Movie";
import css from '../Movie/Movie.module.css'
import {useParams, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux";


const Movies = () => {
    const {movies} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    // const [value, setValue] = useState('');
    const [query, setQuery] = useSearchParams({query: ''})
    // const filteredFilms = movies.filter((movie) => {
    //     return movie.title.toLowerCase().includes(value.toLowerCase())
    // })

    return (
        <div>
        <input type="text"
               className={css.input}
               placeholder={'Search...'}
               onChange={(event) => {
                   // setQuery(value => ({query:event.target.value}))
                   event.target.value?dispatch(movieActions.getSearchedFilms(event.target.value))
                       :dispatch(movieActions.getAll())
               }}/>

        <div className={css.movies}>
            {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
        </div>

        </div>

    );
};

export {Movies}