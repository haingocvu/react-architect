import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const StyledButton = styled(({ color, ...other }) => <Button {...other} />)(
  ({ theme, ...props }) => ({
    color: props.color,
    padding: theme.spacing(2),
    '& .MuiButton-label': {
      textTransform: 'lowercase',
    },
  }),
);

StyledButton.propTypes = {
  color: PropTypes.oneOf(['green', 'yellow']).isRequired,
};

function StyledApi(props) {
  return (
    <StyledButton variant="outlined" color="green">
      Styled Api
    </StyledButton>
  );
}

export default StyledApi;
