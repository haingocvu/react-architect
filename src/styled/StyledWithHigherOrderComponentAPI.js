import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const style = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '& span': {
      color: 'yellow',
    },
  },
};
function StyledWithHigherOrderComponentAPI(props) {
  const { classes } = props;
  console.log(classes);
  return <Button className={classes.root}>Higher Order Component</Button>;
}

StyledWithHigherOrderComponentAPI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(StyledWithHigherOrderComponentAPI);
