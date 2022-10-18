import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'

const Genres = () => {

    const {genres} = useSelector(state => state.movieReducer);
    const navigate = useNavigate();

    return (
        <div className={css.Genres}>
            {genres.map(genre => <Genre genre={genre} key={genre.id}/>)}

            <div className={css.btns}>
                <button
                    onClick={() => navigate(-1)}
                    className={css.btn}
                >Close Genres
                </button>
                <button
                    className={css.btn}
                >Apply</button>

            </div>
        </div>
    );
};

export {Genres}