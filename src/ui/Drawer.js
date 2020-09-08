import React from 'react';
import { SwipeableDrawer, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import ListRouter from 'ui/ListRouter';

function Drawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = open => () => setIsOpen(open);
  return (
    <React.Fragment>
      <IconButton aria-label="drawer" onClick={toggleDrawer(true)}>
        <Menu />
      </IconButton>
      <SwipeableDrawer
        open={isOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        <ListRouter onClick={toggleDrawer(false)} />
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default Drawer;
