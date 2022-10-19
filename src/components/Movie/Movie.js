import {Rating} from "@mui/material";
import {Link} from "react-router-dom";

import css from './Movie.module.css'
import {useSelector} from "react-redux";

const Movie = ({movie}) => {


    const {genres} = useSelector(state => state.movieReducer);

    const findGenre = (id) => {
        const genre = genres.find(item => item.id === id)
        return genre?.name
    }

    return (
        <div>
            <Link to={`/movie/:${movie.id}`} state={{...movie}} className={css.links}>

            <div className={css.eachMovie}>
                {movie.poster_path?<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster_img"/>
                    : <p>No photo</p>}
                <div className={css.movieInfo}>

                <div>
                    <p className={css.text}>{movie.title}</p>
                    <p className={css.text}>Release: {movie.release_date}</p>
                </div>

                <Rating name="half-rating-read"
                        defaultValue={movie.vote_average}
                        max={10}
                        size={'small'}
                        precision={0.5} readOnly />
                </div>
                <div className={css.badget}>
                    {movie.genre_ids.map((value) => <div key={value} className={css.eachBadget}>{findGenre(value)}</div>)}
                </div>
            </div>

            </Link>

        </div>
    );
};

export {Movie}