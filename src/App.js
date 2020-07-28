import React from 'react';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import 'App.css';
import Box from '@material-ui/core/Box';
import MyButtonGroup from 'ui/ButtonGroup';

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
      <MyButtonGroup />
    </Box>
  );
}

export default App;
