import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { LocationContext } from '../App';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import TravelHistory from './travelHistory';

const baseUrl = 'https://geocode.search.hereapi.com/v1/geocode?q=';
const apiKey = process.env.REACT_APP_API;

function Home() {
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');

  const { locations, setLocations } = useContext(LocationContext);

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <iframe
      title="strona informacyjna"
      src="https://orders-e.baselinker.com/12801319/r4u1uovdym/"
      width={1500}
      height={1500}
    ></iframe>
    // <>
    //   <h1>
    //     <code>Home</code>
    //   </h1>

    //   <Stack
    //     direction={{ xs: 'column', sm: 'row' }}
    //     spacing={{ xs: 1, sm: 2, md: 4 }}
    //   >
    //     <TextField
    //       id="outlined-controlled"
    //       label="Start Address"
    //       value={startAddress}
    //       onChange={(event) => {
    //         setStartAddress(event.target.value);
    //       }}
    //     />
    //     <TextField
    //       id="outlined-controlled"
    //       label="Destination"
    //       value={endAddress}
    //       onChange={(event) => {
    //         setEndAddress(event.target.value);
    //       }}
    //     />
    //     <Button
    //       variant="contained"
    //       onClick={() => {
    //         const urlStart = `${baseUrl}${startAddress}&${apiKey}`;
    //         const urlEnd = `${baseUrl}${endAddress}&${apiKey}`;

    //         const fetchStartLocation = fetch(urlStart).then((response) =>
    //           response.json()
    //         );

    //         const fetchEndLocation = fetch(urlEnd).then((response) =>
    //           response.json()
    //         );

    //         const allData = Promise.all([fetchStartLocation, fetchEndLocation]);

    //         // attach then() handler to the allData Promise
    //         allData
    //           .then(([locationStart = {}, locationEnd = {}]) => {
    //             const itemStart = locationStart.items[0];
    //             const itemEnd = locationEnd.items[0];
    //             const positionStart = itemStart.position;
    //             const positionEnd = itemEnd.position;

    //             const finalRoad = {
    //               latStart: positionStart.lat,
    //               latEnd: positionEnd.lat,
    //               lngStart: positionStart.lng,
    //               lngEnd: positionEnd.lng,
    //               startAddress: startAddress,
    //               endAddress: endAddress,
    //             };
    //             setLocations(locations.concat(finalRoad));
    //           })
    //           .catch((e) => {
    //             setOpen(true);
    //           });
    //       }}
    //     >
    //       Submit
    //     </Button>
    //   </Stack>

    //   <TravelHistory travelHistory={locations} />
    //   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    //     <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
    //       Wrong address
    //     </Alert>
    //   </Snackbar>
    // </>
  );
}

export default Home;
