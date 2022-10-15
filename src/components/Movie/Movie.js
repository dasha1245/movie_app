import css from './Movie.module.css'

const Movie = ({movie}) => {
    return (
        <div>
            <div className={css.eachMovie}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster_img"/>
                <div className={css.movieInfo}>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                </div>
            </div>

        </div>
    );
};

export {Movie}