import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '140px',
    width: 'inherit',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function MyGrid(props) {
  const classes = useStyle();
  return (
    <Container>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="center"
        spacing={1}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper className={classes.paper} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyGrid;
