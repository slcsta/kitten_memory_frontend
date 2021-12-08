// Statefull component 
// will display times (scores) for players
// Switch will make sure and display only the first route that matches

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScoreContainer from './ScoreContainer';

export default function Score() {
    return (
        <Switch>
            <Route path="/score" component={routerProps => <ScoreContainer routerProps={routerProps} /> } />
        </Switch>
    )
}