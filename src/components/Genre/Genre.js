import css from '../Genres/Genres.module.css'

const Genre = ({genre}) => {
    return (
        <div>
            <div className={css.eachGenre}>
                <input type="checkbox"
                        name={genre.name}
                />
                <label htmlFor={`${genre.name}`}>{genre.name}</label>
            </div>
        </div>
    );
};

export {Genre}