// Statefull component 
// will display times (scores) for players
// Switch will make sure and display only the first route that matches

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScoresContainer from './ScoresContainer';

export default function Scores() {
    return (
        <Switch>
            <Route path="/scores" component={routerProps => <ScoresContainer routerProps={routerProps} /> } />
        </Switch>
    )
}