import React from 'react';
import { SwipeableDrawer, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import ListRouter from 'ui/ListRouter';

function Drawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleCloseDrawer() {
    setIsOpen(false);
  }
  function handleOpenDrawer() {
    setIsOpen(true);
  }
  function toggleDrawer() {
    setIsOpen(isOpen => !isOpen);
  }
  return (
    <React.Fragment>
      <IconButton aria-label="drawer" onClick={toggleDrawer}>
        <Menu />
        <SwipeableDrawer
          open={isOpen}
          onOpen={handleOpenDrawer}
          onClose={handleCloseDrawer}
        >
          <ListRouter />
        </SwipeableDrawer>
      </IconButton>
    </React.Fragment>
  );
}

export default Drawer;
