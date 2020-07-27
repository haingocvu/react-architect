import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Delete, Save } from '@material-ui/icons';
import { toast } from 'react-toastify';

function MyButton(props) {
  function handleCLick() {
    toast('you clicked');
  }
  return (
    <Grid container direction="row" justify="center" spacing={2}>
      <Grid item xs container justify="center">
        <Button variant="contained" onClick={handleCLick}>
          Default
        </Button>
      </Grid>
      <Grid item xs container justify="center">
        <IconButton aria-label="save" color="primary">
          <Save fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs container justify="center">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Delete />}
          size="large"
        >
          Secondary
        </Button>
      </Grid>
      <Grid item xs container justify="center">
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </Grid>
      <Grid item xs container justify="center">
        <Button variant="contained" color="primary" href="#">
          Link
        </Button>
      </Grid>
      <Grid item xs container justify="center">
        <Button variant="contained" color="primary" disableElevation>
          Disable Elevation
        </Button>
      </Grid>
    </Grid>
  );
}

export default MyButton;
