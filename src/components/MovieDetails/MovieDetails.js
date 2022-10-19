import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";

import css from './MovieDetails.module.css'

const MovieDetails = () => {

    const location = useLocation();
    const {state: movie} = location
    const dispatch = useDispatch();

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
                </div>
            </div>
        </div>
    );
};

export {MovieDetails}