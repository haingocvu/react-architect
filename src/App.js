import React from 'react';
import { ToastContainer } from 'react-toastify';
import { setDefaultLocale, registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'App.css';
import Box from '@material-ui/core/Box';
import StyledHookApi from 'styled/StyledHookApi';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

registerLocale('vi', vi);

setDefaultLocale('vi');

const theme = createMuiTheme({
  color: 'red',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider
        theme={outerTheme => ({
          ...outerTheme,
          color: 'green',
        })}
      >
        <Box padding={2}>
          <CssBaseline />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
          />
          <StyledHookApi variant="outlined">Styled Hoc API</StyledHookApi>
        </Box>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
