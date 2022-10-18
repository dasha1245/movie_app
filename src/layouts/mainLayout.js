import {Outlet} from "react-router-dom"

import {Header, MoviesPage} from "../pages";
import {Genres} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <MoviesPage/>
        </div>
    );
};

export {MainLayout}