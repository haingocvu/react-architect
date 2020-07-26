import React from 'react';
import { ToastContainer } from 'react-toastify';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import 'App.css';
import MyGrid from 'ui/Grid';
function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <MyGrid />
    </div>
  );
}

export default App;
