import {Rating} from "@mui/material";
import {Link} from "react-router-dom";

import css from './Movie.module.css'

const Movie = ({movie}) => {
    return (
        <div>
            <Link to={'/movieDetails'}>

            <div className={css.eachMovie}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster_img"/>
                <div className={css.movieInfo}>
                <p>{movie.title}</p>
                <Rating name="half-rating-read"
                        defaultValue={movie.vote_average}
                        max={10}
                        size={'small'}
                        precision={0.5} readOnly />
                </div>
            </div>

            </Link>

        </div>
    );
};

export {Movie}