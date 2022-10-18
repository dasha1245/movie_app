import {useSelector} from "react-redux";
import {useState} from "react";

import {Movie} from "../Movie/Movie";
import css from '../Movie/Movie.module.css'


const Movies = () => {
    const {movies} = useSelector(state => state.movieReducer);

    const [value, setValue] = useState('');
    const filteredFilms = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
        <input type="text"
               className={css.input}
               placeholder={'Search...'}
               onChange={(event) => setValue(event.target.value)}/>

        <div className={css.movies}>
            {filteredFilms.map((movie) => <Movie movie={movie} key={movie.id}/>)}
        </div>

        </div>

    );
};

export {Movies}