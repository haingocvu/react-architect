import React, { Fragment } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import MaterialUIForm from 'containers/MaterialUIForm';
import { Breadcrumbs, Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

function ReactHookForm() {
  const match = useRouteMatch();
  return (
    <Fragment>
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item container justify="center">
          <Breadcrumbs aria-label="breadcrumbs">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to={`${match.path}/material-ui`}>
              Material UI
            </RouterLink>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <Switch>
            <Route path={`${match.path}/material-ui/:topicId`}>
              <MaterialUIForm />
            </Route>
            <Route path={`${match.path}/material-ui`}>
              <MaterialUIForm />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ReactHookForm;
