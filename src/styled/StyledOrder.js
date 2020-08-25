import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// 1
const useStyleBase = makeStyles({
  root: {
    color: 'blue',
  },
});

// 2
const useStyle = makeStyles({
  root: {
    color: 'red',
  },
});

function StyledOrder(props) {
  const classBase = useStyleBase(props);
  const classes = useStyle(props);
  const className = clsx(classBase.root, classes.root);
  return (
    <Button className={className} {...props}>
      Hello
    </Button>
  );
}

export default StyledOrder;
