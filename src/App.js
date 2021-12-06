// components need to be set up within my app
import './App.css';
import Leaderboard from './components/leaderboard/Leaderboard';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    // <div className="App"> removed this but may want to add back later
    // better to use margins than breaks but using breaks for now
    <div>
      <NavLink to="/">Home</NavLink><br />
      <NavLink to="/leaderboard">Leaderboard</NavLink>
      <br />
      hello world!
      <Leaderboard />
    </div>
  );
}

export default App;
