import css from '../Genres/Genres.module.css'
import {useSelector, useDispatch} from "react-redux";
import {movieActions} from "../../redux";
import {useRef, useState} from "react";

const Genre = ({genre}) => {

    const ref = useRef(null);
    const {selectedGenre} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    const setGenre = (id) =>{
        dispatch(movieActions.setGenre(id))
    }

    const discardGenres = (id) => {
        dispatch(movieActions.discardGenres(id))
    }


    const handleSubmit = (id) => {
        if (ref.current.checked){
            setGenre(id)
        } else {
            discardGenres(id)
        }
    }

    return (
        <div>
            <div className={css.eachGenre}>
                <input type="checkbox"
                       name={genre.name}
                       onClick={() => handleSubmit(genre.id)}
                       ref={ref}
                />
                <label htmlFor={`${genre.name}`}>{genre.name}</label>
            </div>
        </div>
    );
};

export {Genre}