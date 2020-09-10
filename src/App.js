import React from 'react';
import { ToastContainer } from 'react-toastify';
import { setDefaultLocale, registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from 'ui/Drawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactHookForm from 'pages/ReactHookForm';

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
          <Drawer />
          <Switch>
            <Route path="/react-hook-form">
              <ReactHookForm />
            </Route>
          </Switch>
        </ThemeProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
