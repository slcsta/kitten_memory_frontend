// one of my five stateless components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Welcome</Link></li>
                <li><Link to="/instructions">Instructions</Link></li>
                <li><Link to="/cards">Cards</Link></li>
                <li><Link to="/scoreboard">Score Board</Link></li>
            </ul>
        )
    }
}

export default Navbar