import React, { useState, useEffect } from 'react';
import {
  Grid,
  FormGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Box,
} from '@material-ui/core';
import Select from 'react-select';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
function MySelect() {
  const [value, setValue] = useState(null);
  useEffect(() => {
    console.log(value);
  }, [value]);
  function handleChange(value) {
    setValue(value);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        Left
      </Grid>
      <Grid item xs>
        <FormGroup>
          <FormControl>
            <Box paddingBottom={1}>
              <FormLabel>Favorite</FormLabel>
            </Box>
            <Select
              isMulti
              isSearchable
              name="favorite"
              value={value}
              options={options}
              onChange={handleChange}
            />
            <FormHelperText>error goes here</FormHelperText>
          </FormControl>
        </FormGroup>
      </Grid>
      <Grid item xs={3}>
        Right
      </Grid>
    </Grid>
  );
}

export default MySelect;
