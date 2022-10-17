import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import {useDispatch} from "react-redux";

import css from './Header.module.css'
import {movieActions} from "../../redux";

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className={css.Header}>
            <button onClick={()=>dispatch(movieActions.themeSwitcher())} className={css.darkMode}><FontAwesomeIcon icon={solid('moon')} size={'lg'}/></button>
            <button className={css.genre_btn}>Genres</button>
        </div>
    );
};

export {Header}