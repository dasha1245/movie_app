import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";

import {Movie} from "../Movie/Movie";
import css from '../Movie/Movie.module.css'
import cssGenre from '../Genres/Genres.module.css'
import {movieActions} from "../../redux";

const Movies = () => {
    const {movies} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAllGenres())
    }, [dispatch])


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

            <Link to={'genres'}>
                <button className={cssGenre.btn}
                        onClick={() => dispatch(movieActions.getAllGenres())}
                >Genres</button>

            </Link>

        <div className={css.movies}>
            {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
        </div>

        </div>

    );
};

export {Movies}