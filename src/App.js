import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom"

import './App.css';
import {MainLayout} from "./layouts";
import {GlobalStyles} from './darkMode/globalStyle'
import {lightTheme, darkTheme} from './darkMode/Theme'
import {Genres} from "./components";
import {MovieDetails} from "./components/MovieDetails/MovieDetails";
import {MovieDetailsPage} from "./pages/movieDetailsPage/movieDetailsPage";


function App() {
    const {theme} = useSelector(state => state.movieReducer);
  return (

      <ThemeProvider theme={theme==='light' ? lightTheme:darkTheme}>
          <>
          <GlobalStyles/>
      <div>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                <Route path={'genres'} element={<Genres/>}/>
              </Route>
              <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
          </Routes>

      </div>
          </>
      </ThemeProvider>

  );
}

export default App;
