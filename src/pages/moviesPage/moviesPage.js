import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {Movies} from "../../components";
import {movieActions} from "../../redux";
import css from './pages.module.css'
import {useSearchParams} from "react-router-dom";


const MoviesPage = () => {
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page:'1'});


    useEffect(() => {
        dispatch(movieActions.getAll(query.get('page')))
    }, [dispatch, query]);

    return (
        <div>
            <h3>Search for a movie...</h3>
            <div >
                <button
                    className={query === 1? css.btn_disabled:css.btn}
                    onClick={() => {
                    setQuery(value => ({page:value.get('page') - 1}))
                }} disabled={query === 1}>Previous Page</button>
                <button
                    className={css.btn}
                    onClick={() => {
                        setQuery(value => ({page:+value.get('page') + 1}))
                }}>Next Page</button>
            </div>
            <Movies/>
        </div>
    );
};

export {MoviesPage}