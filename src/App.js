import React from 'react';
import { ToastContainer } from 'react-toastify';
import { setDefaultLocale, registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'App.css';
import HybridCss from 'styled/HybridCss';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuBar from 'ui/MenuBar';
import { BrowserRouter as Router } from 'react-router-dom';

registerLocale('vi', vi);

setDefaultLocale('vi');

const theme = createMuiTheme({
  color: 'red',
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ThemeProvider
          theme={outerTheme => ({
            ...outerTheme,
            color: 'green',
          })}
        >
          <CssBaseline />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
          />
          <MenuBar />
          <HybridCss />
        </ThemeProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
