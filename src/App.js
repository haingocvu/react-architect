import React from 'react';
import { ToastContainer } from 'react-toastify';
import { setDefaultLocale, registerLocale } from 'react-datepicker';
import vi from 'date-fns/locale/vi';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'App.css';
import Box from '@material-ui/core/Box';
import StyledHocApi from 'styled/StyledHocApi';

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
      <StyledHocApi color="green" variant="outlined">
        Styled Hoc API
      </StyledHocApi>
    </Box>
  );
}

export default App;
