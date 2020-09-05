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
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import styled from 'styled-components';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

const options = [
  { value: 'Female', label: 'Female' },
  { value: 'Male', label: 'Male' },
];

const StyledTextField = styled(TextField)`
  margin-bottom: ${props => (props.mb ? props.mb : '24px')};
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
  margin-bottom: ${props => (props.mb ? props.mb : '24px')};
`;

const StyledFormLabel = styled(FormLabel)`
  margin-bottom: 8px;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

const schema = yup.object().shape({
  username: yup.string().required().min(6).max(18),
  password: yup.string().required().min(6).max(18),
  gender: yup.object().required(),
  birthday: yup.date().required(),
});

function MaterialUIForm() {
  const { register, handleSubmit, errors, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
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
              inputRef={register}
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
              inputRef={register}
            />
            <StyledFormControl mb="16px">
              <StyledFormLabel>gender *</StyledFormLabel>
              <Controller
                control={control}
                as={<Select />}
                name="gender"
                options={options}
              />
              <StyledFormHelperText error={!!errors.gender}>
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
                    customInput={
                      <StyledTextField mb="0px" label="birth day *" />
                    }
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
              <StyledFormHelperText error={!!errors.birthday}>
                {errors.birthday && errors.birthday.message}
              </StyledFormHelperText>
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
