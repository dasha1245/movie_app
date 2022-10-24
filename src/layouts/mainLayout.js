import {useSelector} from "react-redux";

import {Header, MoviesPage} from "../pages";
import {Genres} from "../components";

const MainLayout = () => {

    const {showGenre} = useSelector(state => state.movieReducer);

    return (
        <div>
            <Header/>
            {
                showGenre ? <Genres/>:null
            }
            <MoviesPage/>
        </div>
    );
};

export {MainLayout}