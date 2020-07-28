import React from 'react';
import { ButtonGroup, Button, Grid } from '@material-ui/core';

function MyButtonGroup(props) {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justify="center">
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      </Grid>
      <Grid item container justify="center">
        <ButtonGroup variant="contained" aria-label="contained button group">
          <Button>Button 4</Button>
          <Button>Button 5</Button>
          <Button>Button 6</Button>
        </ButtonGroup>
      </Grid>
      <Grid item container justify="center">
        <ButtonGroup
          variant="text"
          aria-label="text button group"
          color="secondary"
          size="large"
          orientation="vertical"
        >
          <Button>Button 7</Button>
          <Button>Button 8</Button>
          <Button>Button 9</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}
export default MyButtonGroup;
