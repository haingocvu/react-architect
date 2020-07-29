import React from 'react';
import { TextField, Grid } from '@material-ui/core';

function MyTextField() {
  return (
    <Grid container justify="center">
      <Grid item>
        <TextField
          type="password"
          required
          helperText="please fill"
          label="Standard"
        />
      </Grid>
    </Grid>
  );
}

export default MyTextField;
