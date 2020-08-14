import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyle = makeStyles(theme => ({
  root: {
    color: props => props.color,
    padding: theme.spacing(2),
    '& .MuiButton-label': {
      textTransform: 'lowercase',
    },
  },
}));

function StyledHookApi(props) {
  const classes = useStyle(props);
  return (
    <Button variant="outlined" color="primary" className={classes.root}>
      Hoc Api
    </Button>
  );
}

StyledHookApi.propTypes = {
  color: PropTypes.oneOf(['green', 'yellow']).isRequired,
};

export default StyledHookApi;
