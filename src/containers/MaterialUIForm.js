import React, { useState } from 'react';
import {
  Grid,
  FormGroup,
  FormControl,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useForm } from 'react-hook-form';

function MaterialUIForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });
  const [showVisibilityPassword, setShowVisibilityPassword] = useState(false);
  function toggleVisibilityPassword() {
    setShowVisibilityPassword(preShow => !preShow);
  }
  function _handleSubmit(values) {
    console.log(values);
  }
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <form onSubmit={handleSubmit(_handleSubmit)}>
          <FormGroup>
            <TextField
              label="User name"
              name="username"
              error={!!errors.username}
              inputRef={register({
                required: { value: true, message: 'User name is required!' },
                maxLength: { value: 20, message: 'Maximum length is 20' },
              })}
              helperText={errors.username && errors.username.message}
            />
            <TextField
              label="Password"
              name="password"
              type={showVisibilityPassword ? 'text' : 'password'}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="show password"
                      onClick={toggleVisibilityPassword}
                    >
                      {showVisibilityPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              inputRef={register({
                required: { value: true, message: 'password is required' },
                minLength: { value: 10, message: 'minimum length is 10' },
                maxLength: { value: 20, message: 'maximum length is 20' },
              })}
            />
            <FormControl margin="dense">
              <Button variant="contained" type="submit" color="secondary">
                Register
              </Button>
            </FormControl>
          </FormGroup>
        </form>
      </Grid>
    </Grid>
  );
}

export default MaterialUIForm;
