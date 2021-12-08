// Statefull component 
// will display times (scores) for players
// Switch will make sure and display only the first route that matches

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LeaderboardContainer from './LeaderboardContainer';

export default function Leaderboard() {
    return (
        <Switch>
            <Route path="/leaderboard" component={routerProps => <LeaderboardContainer routerProps={routerProps} /> } />
        </Switch>
    )
}