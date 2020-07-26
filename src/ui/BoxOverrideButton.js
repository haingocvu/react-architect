import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { toast } from 'react-toastify';

// Box must be import after Button to override the style of Button

// The CSS specificity relies on the import order. If you want the guarantee that the wrapped component's style will be overridden, you need to import the Box last.

// TODO: IMPORTANT
// use children as render props
// bgcolor applied by styled functions
// abc and onClick will be forwarded to root element, in this case is Button element

// view below link for more detail
// https://material-ui.com/components/box/

function BoxOverrideButton(props) {
  function handleClick() {
    toast.success('Hello world');
  }
  return (
    <>
      <Box bgcolor="purple" abc="abc" onClick={handleClick}>
        {props => (
          <Button {...props} variant="contained" color="primary">
            Hello world
          </Button>
        )}
      </Box>
    </>
  );
}

export default BoxOverrideButton;
