import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MapPage from './screens/Map/MapPage';

const App = () => (
    <Switch>
        <Route path="/map" component={MapPage} />
    </Switch>
);

export default App;
