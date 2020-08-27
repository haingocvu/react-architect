import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  '@global': {
    '.cssjss-advanced-global-root': {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
    },
    '.cssjss-advanced-global-child': {
      height: 8,
      backgroundColor: 'red',
    },
  },
});

function GlobalCss(props) {
  useStyles(props);
  return (
    <div className="cssjss-advanced-global-root">
      <div className="cssjss-advanced-global-child"></div>
    </div>
  );
}

export default GlobalCss;
