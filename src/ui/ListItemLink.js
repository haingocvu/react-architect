import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@material-ui/core';

function ListItemLink(props) {
  const { icon, primary, to } = props;
  return (
    <li>
      <ListItem></ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
