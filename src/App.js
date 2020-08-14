import React from 'react';
import { ToastContainer } from 'react-toastify';
import { setDefaultLocale, registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'App.css';
import Box from '@material-ui/core/Box';
import StyledApi from 'styled/StyledApi';

registerLocale('vi', vi);

setDefaultLocale('vi');

function App() {
  return (
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
      <StyledApi />
    </Box>
  );
}

export default App;
