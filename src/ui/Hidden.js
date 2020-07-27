import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Paper,
  Hidden,
  makeStyles,
  Grid,
  withWidth,
} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '140px',
    width: 'inherit',
  },
}));

function MyHidden(props) {
  const { width } = props;
  const classes = useStyle();
  return (
    <Grid className={classes.root} container direction="column" spacing={2}>
      <Grid item>
        <Typography>Current Width: {width}</Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Hidden xsUp>
          <Grid item xs>
            <Paper className={classes.paper}>xsUp</Paper>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs>
            <Paper className={classes.paper}>smUp</Paper>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs>
            <Paper className={classes.paper}>mdUp</Paper>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs>
            <Paper className={classes.paper}>lgUp</Paper>
          </Grid>
        </Hidden>
        <Hidden xlUp>
          <Grid item xs>
            <Paper className={classes.paper}>xlUp</Paper>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
}

MyHidden.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(MyHidden);
