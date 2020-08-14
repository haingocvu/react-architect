import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiButton-label': {
      textTransform: props => props.case || 'inherit',
    },
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: props => {
      console.log(props);
      console.log(theme);
      return props.height;
    },
    padding: `0px ${theme.spacing(2)}px`,
  },
}));

function StyledWithHook(props) {
  const classes = useStyle(props);
  console.log(classes);
  return <Button className={classes.root}>Styled With Hook</Button>;
}

StyledWithHook.propTypes = {
  height: PropTypes.number,
  case: PropTypes.string,
};

export default StyledWithHook;
