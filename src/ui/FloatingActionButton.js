import React from 'react';
import { Fab, Grid } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

function MyFloatingActionButton() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <div>Content</div>
      </Grid>
      <Grid item xs container justify="center" alignItems="center">
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default MyFloatingActionButton;
