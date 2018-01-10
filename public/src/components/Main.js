import React from 'react';
import {HomePageContainer as Home} from '../containers/HomePageContainer';
import {Switch, Route} from 'react-router-dom';
import {searchPageContainer as Search} from "../containers/SearchPageContainer";
import {Details} from './DetailsPage'

const NotFound = () => <div><h1>Page Not Found</h1></div>

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/details/:make/:model' render={({match}) => (
        <Details make={match.params.make} model={match.params.model}/>
      )}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
)
