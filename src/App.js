// components need to be set up within my app
import './App.css';
import Leaderboard from './components/leaderboard/Leaderboard';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    // <div className="App"> removed this but may want to add back later
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/leaderboard">Leaderboard</NavLink>
      hello world!
      <Leaderboard />
    </div>
  );
}

export default App;
