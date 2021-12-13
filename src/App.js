// components need to be set up within my app
//import logo from '.logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import Pages from './components/Pages'

//import CardsContainer from './components/card/CardsContainer';

function App() {
  return (
    <div className="App"> 
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/scores">Scores</NavLink><br />
      <NavLink to="/instructions">Instructions</NavLink><br />
      <NavLink to="/cards">Cards</NavLink>
      <br />
      <Pages />
    </div>
  );
}

export default App;
