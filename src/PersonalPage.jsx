import * as React from 'react';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Person from './Person';
import PersonGenres from './PersonGenres';
import PersonMovie from './PersonMovie';
import AddGenre from './AddGenre';
import AddRating from './AddRating';

function PersonalPage() {

    let match = useRouteMatch();
  
    return (
    <>
      <h1>Personal page</h1>
      <Switch>
        <Route path={`${match.path}/:firstName`}>
          <Person/>
          <PersonMovie/>
          <AddRating/>
          <PersonGenres/>
          <AddGenre/>
        </Route>
        <Route path={match.path}>
          <h3>Go back and click on a person.</h3>
        </Route>
      </Switch>
    </>
    );
  }
  
  export default PersonalPage;