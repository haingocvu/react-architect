import React from 'react';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)(props => {
  console.log(props);
  return {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: `0 15px`,
    '& span': {
      color: 'yellow',
    },
    '& .MuiButton-label': {
      textTransform: props.case || 'inherit',
      margin: props.theme.spacing(2),
    },
  };
});

StyledButton.propTypes = {
  case: PropTypes.string,
};

function StyledWithStyledComponentAPI() {
  return (
    <StyledButton case="lowercase">
      Style With Styled-Component API
    </StyledButton>
  );
}

export default StyledWithStyledComponentAPI;
