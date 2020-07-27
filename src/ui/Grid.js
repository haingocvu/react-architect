import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  paper: {
    height: '140px',
    width: 'inherit',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function MyGrid(props) {
  const classes = useStyle();
  return (
    <Grid container direction="row" justify="center" spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>XS 12</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>XS 12 SM 6</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>XS 12 SM 6</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>XS 6 SM 3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>XS 6 SM 3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>XS 6 SM 3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>XS 6 SM 3</Paper>
      </Grid>
    </Grid>
  );
}

export default MyGrid;
