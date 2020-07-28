import React, { useState } from 'react';
import {
  Checkbox,
  Grid,
  FormControlLabel,
  FormGroup,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@material-ui/core';
import { Favorite, FavoriteBorder, Fingerprint } from '@material-ui/icons';

function MyCheckbox() {
  const [state, setState] = useState({
    favorite: false,
    isFemale: true,
  });
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  }
  function handleSubmit() {
    console.log(JSON.stringify(state));
  }
  return (
    <Grid container justify="center">
      <FormControl component="fieldset">
        <FormLabel component="legend">Pick one of them</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.isFemale}
                name="isFemale"
                onChange={handleChange}
              />
            }
            label="is female?"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.favorite}
                onChange={handleChange}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="favorite"
              />
            }
            label="is rich?"
          />
          <Button
            color="secondary"
            variant="contained"
            startIcon={<Fingerprint />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormGroup>
        <FormHelperText>carefully</FormHelperText>
      </FormControl>
    </Grid>
  );
}

export default MyCheckbox;
