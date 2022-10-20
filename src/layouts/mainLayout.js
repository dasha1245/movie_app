import {Header, MoviesPage} from "../pages";
import {Genres} from "../components";
import {useSelector} from "react-redux";

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