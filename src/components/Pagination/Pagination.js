import {useSearchParams} from "react-router-dom";
import {useEffect} from "react"
import {useDispatch} from "react-redux";

import css from "../../pages/moviesPage/pages.module.css";
import {movieActions} from "../../redux";

const Pagination = () => {

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(movieActions.getAll(query.get('page')))
    }, [dispatch, query]);

    return (
        <div>
            <div >
                <button
                    className={query.get('page') === "1"? css.btn_disabled:css.btn}
                    onClick={() => {
                        setQuery(value => ({page:value.get('page') - 1}))
                    }}
                    disabled={query.get('page') === "1"}>Previous Page</button>

                <button
                    className={css.btn}
                    onClick={() => {
                        setQuery(value => ({page:+value.get('page') + 1}))
                    }}>Next Page</button>
            </div>
        </div>
    );
};

export {Pagination}