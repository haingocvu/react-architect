import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Link,
} from '@material-ui/core';
import { Menu, Home, HowToReg } from '@material-ui/icons';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.info.light,
    width: '100%',
    height: '35px',
  },
  list: {
    width: '250px',
  },
  fullList: {
    width: 'auto',
  },
}));

const StyledMenuIcon = styled(Menu)`
  color: azure;
`;

function MenuBar(props) {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const classes = useStyle(props);
  const toggleDrawer = isOpen => event => {
    setIsOpenDrawer(isOpen);
  };
  const list = (
    <List className={classes.list}>
      <Link component={RouterLink} to="react-hook-form">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>

      <ListItem button>
        <ListItemIcon>
          <HowToReg />
        </ListItemIcon>
        <ListItemText primary="React Hook Form" />
      </ListItem>
    </List>
  );
  return (
    <div className={classes.root}>
      <IconButton onClick={toggleDrawer(true, 'click')}>
        <StyledMenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={isOpenDrawer}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}

export default MenuBar;
