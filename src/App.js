// components need to be set up within my app
import './App.css';
import Scores from './components/scores/Scores';
import { NavLink } from 'react-router-dom';
import CardImageContainer from './components/card/CardImageContainer';

function App() {
  return (
    <div className="App"> 
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/scores">Scores</NavLink><br />
      <NavLink to="/instructions">Instructions</NavLink>
      <br />
      <Scores />
      <CardImageContainer />
    </div>
  );
}

export default App;
