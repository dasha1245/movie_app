import css from './Movie.module.css'
import {Rating} from "@mui/material";

const Movie = ({movie}) => {
    return (
        <div>
            <div className={css.eachMovie}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster_img"/>
                <div className={css.movieInfo}>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <Rating name="half-rating-read" defaultValue={movie.vote_average} max={10} size={'small'} precision={0.5} readOnly />
                </div>
            </div>

        </div>
    );
};

export {Movie}