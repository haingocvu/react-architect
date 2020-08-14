import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function StyledHocApi(props) {
  const { classes } = props;
  return (
    <Button variant="outlined" className={classes.root}>
      Styled Hoc
    </Button>
  );
}

StyledHocApi.propTypes = {
  color: PropTypes.oneOf(['green', 'yellow']).isRequired,
};

export default withStyles(theme => ({
  root: {
    color: props => props.color,
    padding: theme.spacing(2),
    '& .MuiButton-label': {
      textTransform: 'lowercase',
    },
  },
}))(StyledHocApi);
