import React from 'react';
import Container from '@material-ui/core/Container';
import BoxOverrideButton from 'ui/BoxOverrideButton';

// TODO: Container is just a div (it can be others such as span, ...)
// * It add default styling as padding
// ! It center the div (using margin left auto, margin right auto)
// ! It does not center its children

function MyContainer(props) {
  return (
    <Container {...props} maxWidth="sm">
      <BoxOverrideButton />
    </Container>
  );
}

export default MyContainer;
