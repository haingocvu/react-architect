import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    '&.root': {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
    },
    '& .child': {
      height: 8,
      backgroundColor: 'red',
    },
  },
});

function HybridCss(props) {
  const classes = useStyles(props);
  return (
    <div className={clsx(classes.root, 'root')}>
      <div className="child"></div>
    </div>
  );
}

export default HybridCss;
