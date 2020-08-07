import React from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { NavigateNext, Home } from '@material-ui/icons';
import styled from 'styled-components';

const StyledHomeIcon = styled(Home)`
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

function BreadCrumbs() {
  function handleClick(e) {
    e.preventDefault();
    console.log('you clicked breadcrumbs');
  }
  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumbs"
    >
      <StyledLink href="" color="inherit" onClick={handleClick}>
        <StyledHomeIcon />
        Material UI
      </StyledLink>
      <Link href="" color="inherit" onClick={handleClick}>
        Core
      </Link>
      <Typography color="textPrimary">BreadCrumbs</Typography>
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
