import './App.css';
import Home from './component/home';
import Map from './component/map';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/map" element={<Map />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
