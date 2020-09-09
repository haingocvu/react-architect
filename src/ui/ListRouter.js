import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import ListItemLink from 'ui/ListItemLink';
import { Home, Code as CodeIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

function ListRouter({ onClick, ...props }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <ListItemLink
          onClick={onClick}
          to="/home"
          icon={<Home />}
          primary="home"
        />
        <ListItemLink
          onClick={onClick}
          to="/react-hook-form"
          icon={<CodeIcon />}
          primary="react hook form"
          onc
        />
      </List>
    </div>
  );
}

export default ListRouter;
