import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <button className={css.darkMode}><FontAwesomeIcon icon={solid('moon')} size={'lg'}/></button>
            <input type="text" className={css.input} placeholder={'Search...'}/>
            <button className={css.genre_btn}>Genres</button>
        </div>
    );
};

export {Header}