// Statefull component 
// will display times (scores) for players

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