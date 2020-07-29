import React, { useState, useEffect } from 'react';
import { Slider, Grid } from '@material-ui/core';

function MySlider() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
  }, [value]);
  function handleChange(e, newValue) {
    setValue(newValue);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs>
        <Slider
          value={value}
          min={0}
          max={100}
          step={1}
          onChange={handleChange}
          aria-label="slider 1"
        />
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
}

export default MySlider;
