import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Pagination from '@mui/material/Pagination'
import {Movie} from "../Movie/Movie";
import css from '../Movie/Movie.module.css'
import cssGenre from '../Genres/Genres.module.css'
import {movieActions} from "../../redux";

const Movies = () => {
    const {movies, currentPage, totalPages, searchParams, selectedGenre, showGenre} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();


    useEffect(()=>{
        if ((searchParams === '' || !searchParams) && !selectedGenre) {
            dispatch(movieActions.getAll({currentPage}))
        } if (selectedGenre && (searchParams === '' || !searchParams)) {
            dispatch(movieActions.getWithGenres({currentPage, selectedGenre}))
        } else {
            dispatch(movieActions.getSearchedFilms({searchParams, currentPage}))

        }
    }, [currentPage, dispatch, searchParams, selectedGenre])


    const changePage = (page) => {
        dispatch(movieActions.setCurrentPage(page))
    }


    return (
        <div>

        <input type="text"
               className={css.input}
               placeholder={'Search...'}
               onChange={(event) => {
                   dispatch(movieActions.setSearchParams(event.target.value))
               }}/>

                <button className={cssGenre.btn}
                        onClick={() => {
                            dispatch(movieActions.showGenres(!showGenre))
                        }}
                >Genres</button>


            <Pagination
                page={currentPage}
                count={totalPages>500? 500:totalPages}
                onChange={(_, page) => changePage(page)}
                shape={'rounded'}
            />

        <div className={css.movies}>
            {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
        </div>

        </div>

    );
};

export {Movies}