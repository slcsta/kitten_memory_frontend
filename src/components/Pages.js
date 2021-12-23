import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScoresContainer from './scores/ScoresContainer';
import Home from './Home';
import Instructions from './Instructions';
import CardsContainer from './card/CardsContainer';

export default function Pages() {
    return (
        <Switch>
            <Route 
                exact path="/" component={routerProps => <Home routerInfo={routerProps} /> }
            />
            <Route 
                exact path="/instructions" component={routerProps => <Instructions routerInfo={routerProps} /> } 
            />
            <Route 
                exact path="/cards" component={ routerProps => <CardsContainer routerInfo={routerProps} /> } 
                />
            <Route exact path="/scores" component={routerProps => <ScoresContainer routerProps={routerProps} /> } />
        </Switch>
    )
}



/* <Route exact path="/cards" componet={ routerProps => <CardsContainer routerProps={routerProps} /> } /> */

