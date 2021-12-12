import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScoresContainer from '/scores/ScoresContainer';

export default function Pages() {
    return (
        <Switch>
            <Route path="/scores" component={routerProps => <ScoresContainer routerProps={routerProps} /> } />
        </Switch>
    )
}