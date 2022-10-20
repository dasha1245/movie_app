import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'
import {movieActions} from "../../redux";


const Genres = () => {

    const {genres} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getAllGenres())
    }, [dispatch])

    return (
        <div className={css.Genres}>
            {genres?.map(genre => <Genre
                genre={genre}
                key={genre.id}
            />)}

            <div className={css.btns}>
                <button
                    onClick={() => dispatch(movieActions.showGenres(false))}
                    className={css.btn}
                >Close Genres
                </button>



            </div>
        </div>
    );
};

export {Genres}