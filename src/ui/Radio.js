import React, { useState, useEffect } from 'react';
import {
  RadioGroup,
  Radio,
  Grid,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

function MyRadio() {
  const [value, setValue] = useState('female');
  useEffect(() => {
    console.log(value);
  }, [value]);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <Grid container justify="center">
      <FormGroup>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              label="female"
              value="female"
              control={<Radio />}
            />
            <FormControlLabel label="male" control={<Radio />} value="male" />
            <FormControlLabel
              label="other"
              control={<Radio />}
              value="other"
              disabled
            />
          </RadioGroup>
          <FormHelperText>error goes here</FormHelperText>
        </FormControl>
      </FormGroup>
    </Grid>
  );
}

export default MyRadio;
