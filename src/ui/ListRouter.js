import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import ListItemLink from 'ui/ListItemLink';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

function ListRouter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <List>
          <ListItemLink
            to="/react-hook-form"
            icon={<Home />}
            primary="react hook form"
          />
          <ListItemLink to="/home" icon={<Home />} primary="home" />
        </List>
      </BrowserRouter>
    </div>
  );
}

export default ListRouter;
