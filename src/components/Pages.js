import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScoresContainer from './scores/ScoresContainer';
import Home from './components/Home';
import Instructions from './components/Instructions';

export default function Pages() {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/instructions" component={ Instructions } />
            <Route exact path="/scores" component={routerProps => <ScoresContainer routerProps={routerProps} /> } />
        </Switch>
    )
}