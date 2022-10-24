import {useDispatch} from "react-redux";

import css from './Header.module.css'
import {movieActions} from "../../redux";


const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className={css.Header}>
            <button onClick={()=>dispatch(movieActions.themeSwitcher())}
                    className={css.darkMode}> Change Theme</button>
        </div>
    );
};

export {Header}