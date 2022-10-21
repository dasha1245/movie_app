import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import css from './MovieDetails.module.css'
import {movieActions} from "../../redux";

const MovieDetails = () => {

    const location = useLocation();
    const {state: movie} = location

    const {genres} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(movieActions.getAllGenres())
    }, [])

    const findGenre = (id) => {
        const genre = genres.find(item => item.id === id)
        return genre?.name
    }

    return (
        <div>
            <h3 className={css.title}>{movie.title}</h3>
            <div className={css.main}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="movie photo"
                height={500} width={850}
                />
                <div>

                    <div className={css.desc}>
                    <h4>Description</h4>
                    <div className={css.line}></div>
                    </div>

                    <p className={css.overview}>{movie.overview}</p>
                    <h5>Genres: {movie.genre_ids?.map((value) => <div key={value} >{findGenre(value)}</div>)}</h5>
                </div>
            </div>
        </div>
    );
};

export {MovieDetails}