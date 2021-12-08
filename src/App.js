// components need to be set up within my app
import './App.css';
import Score from './components/score/Score';
import { NavLink } from 'react-router-dom';
import CardImageContainer from './components/card/CardImageContainer';

function App() {
  return (
    // <div className="App"> removed this but may want to add back later
    // better to use margins than breaks but using breaks for now
    <div>
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/score">Leaderboard</NavLink><br />
      <NavLink to="/instructions">Instructions</NavLink>
      <br />
      <Score />
      <CardImageContainer />
    </div>
  );
}

export default App;
