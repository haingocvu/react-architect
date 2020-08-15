import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    color: props => props.color || theme.color,
    padding: theme.spacing(2),
    '& .MuiButton-label': {
      textTransform: 'lowercase',
    },
  },
}));

function StyledHookApi(props) {
  const theme = useTheme();
  console.log(theme);
  const classes = useStyle(props);
  const { color, children, ...other } = props;
  return (
    <Button {...other} className={classes.root}>
      {children}
    </Button>
  );
}

export default StyledHookApi;
