import React, { useState } from 'react';
import { withStyles, FormHelperText, FormLabel } from '@material-ui/core';
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
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

const options = [
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },
];

const StyledTextField = styled(TextField)`
  margin-bottom: 24px;
  label.Mui-focused {
    color: green;
  }
  .MuiInputLabel-outlined {
    text-transform: lowercase;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

const StyledButton = withStyles({
  root: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: '#179f00',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledFormHelperText = styled(FormHelperText)`
  margin-left: 16px;
  margin-right: 16px;
  color: ${props => (props.error ? '#f44336' : 'rgba(0, 0, 0, 0.54)')};
`;

const StyledFormControl = styled(FormControl)`
  margin-bottom: 24px;
`;

const StyledFormLabel = styled(FormLabel)`
  margin-bottom: 8px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

function MaterialUIForm() {
  const { register, handleSubmit, errors, control } = useForm({
    mode: 'onChange',
  });
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
            <StyledTextField
              variant="outlined"
              label="User name *"
              name="username"
              error={!!errors.username}
              inputRef={register({
                required: { value: true, message: 'user name is required!' },
                maxLength: { value: 20, message: 'maximum length is 20' },
              })}
              helperText={errors.username && errors.username.message}
            />
            <StyledTextField
              variant="outlined"
              label="Password *"
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
            <StyledFormControl>
              <StyledFormLabel>gender *</StyledFormLabel>
              <Controller
                control={control}
                as={<Select />}
                name="gender"
                options={options}
                rules={{
                  required: { value: true, message: 'gender is required' },
                }}
              />
              <StyledFormHelperText error={errors.gender}>
                {errors.gender && errors.gender.message}
              </StyledFormHelperText>
            </StyledFormControl>
            <StyledFormControl>
              <Controller
                control={control}
                name="birthday"
                render={({ value, ...props }) => (
                  <StyledDatePicker
                    onChange={props.onChange}
                    customInput={<StyledTextField label="birth day *" />}
                    selected={value}
                    locale="vi"
                    dateFormat="dd/MM/yyyy"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    withPortal
                  />
                )}
              />
            </StyledFormControl>
            <FormControl margin="dense">
              <StyledButton variant="contained" type="submit" color="secondary">
                Register
              </StyledButton>
            </FormControl>
          </FormGroup>
        </form>
      </Grid>
    </Grid>
  );
}

export default MaterialUIForm;
