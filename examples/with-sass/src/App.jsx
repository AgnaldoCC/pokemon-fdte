import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MapPage from './screens/Map/MapPage';
import HomePage from './screens/Home/HomePage';

const App = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/map" exact component={MapPage} />
    </Switch>
);

export default App;
