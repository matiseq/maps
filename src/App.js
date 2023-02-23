import './App.css';
import Home from './component/home';
import Map from './component/map';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createContext, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container } from '@mui/system';

export const LocationContext = createContext({
  locations: [],
  setLocations: () => {},
});

function App() {
  const [locations, setLocations] = useState([]);
  const [navIcon, setNavIcon] = useState(0);
  const value = useMemo(() => ({ locations, setLocations }), [locations]);
  return (
    <LocationContext.Provider value={value}>
      <Container>
        <Router>
          <Box sx={{ width: 300 }}>
            <BottomNavigation
              showLabels
              value={navIcon}
              onChange={(event, newValue) => {
                setNavIcon(newValue);
              }}
            >
              <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/map"
                label="Map"
                icon={<LocationOnIcon />}
              />
            </BottomNavigation>
          </Box>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/map" element={<Map />}></Route>
          </Routes>
        </Router>
      </Container>
    </LocationContext.Provider>
  );
}

export default App;
