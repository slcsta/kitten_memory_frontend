import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScoresContainer from './scores/ScoresContainer';
import Home from './Home';
import Instructions from './Instructions';
import CardsContainer from './card/CardsContainer';

export default function Pages() {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/instructions" component={ Instructions } />
            <Route exact path="/cards" componet={ routerProps => <CardsContainer routerProps={routerProps} /> } />
            <Route exact path="/scores" component={routerProps => <ScoresContainer routerProps={routerProps} /> } />
        </Switch>
    )
}

