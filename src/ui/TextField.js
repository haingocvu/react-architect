import React, { useState } from 'react';
import {
  TextField,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  IconButton,
} from '@material-ui/core';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';

function MyTextField() {
  const [showPasswordFormat, setShowPasswordFormat] = useState(true);
  function handleTogglePassword() {
    setShowPasswordFormat(prePasswordFormat => !prePasswordFormat);
  }
  return (
    <Grid container justify="center">
      <Grid item xs>
        <TextField
          type="password"
          required
          helperText="please fill"
          label="Standard"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          error
        />
      </Grid>
      <Grid item xs>
        <TextField
          required
          label="Text Area"
          variant="outlined"
          error
          helperText="please fill"
          multiline
          rows={3}
        />
      </Grid>
      <Grid item xs>
        <FormControl>
          <InputLabel>user name</InputLabel>
          <Input
            type={showPasswordFormat ? 'password' : 'text'}
            id="input with icon adornment"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePassword}
                >
                  {showPasswordFormat ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>error goes here</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default MyTextField;
