import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {Routes} from "react-router-dom"

import './App.css';
import {MainLayout} from "./layouts";
import {GlobalStyles} from './darkMode/globalStyle'
import {lightTheme, darkTheme} from './darkMode/Theme'


function App() {
    const {theme} = useSelector(state => state.movieReducer);
  return (

      <ThemeProvider theme={theme==='light' ? lightTheme:darkTheme}>
          <>
          <GlobalStyles/>
      <div>
            <MainLayout/>
      </div>
          </>
      </ThemeProvider>

  );
}

export default App;
