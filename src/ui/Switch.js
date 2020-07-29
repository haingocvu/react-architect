import React, { useState } from 'react';
import {
  Grid,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from '@material-ui/core';

function MySwitch() {
  const [value, setValue] = useState(false);
  function handleChange(e) {
    setValue(e.target.checked);
  }
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs container justify="center">
        <FormGroup>
          <FormControlLabel
            label="is beauty?"
            control={
              <Switch name="beauty" checked={value} onChange={handleChange} />
            }
          />
          <FormHelperText>error goes here</FormHelperText>
        </FormGroup>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}

export default MySwitch;
