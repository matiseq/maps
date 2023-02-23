import React, { useState } from 'react';
import './map.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import Routing from './routing';
import { TextField } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from '@mui/material/Button';

function Map() {
  const [distance, setDistance] = useState(0);
  const [cost, setCost] = useState(2);

  const makePrint = () => {
    const mapPage = document.getElementById('divToPrint');
    html2canvas(mapPage).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save('travelData.pdf');
    });
  };
  return (
    <div id="divToPrint">
      <h1>
        <code>Map</code>
      </h1>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ mb: 2 }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <TextField
          id="outlined-controlled"
          label="Cost per km"
          type="number"
          value={cost}
          onChange={(event) => {
            setCost(event.target.value);
          }}
        />
        <Chip
          label={`Km Cost  ${Math.round(cost * 1.1 * distance)} PLN `}
          color="success"
        />
        <Chip label={`Distance: ${distance} km`} color="primary" />
        <Chip
          label={`Cost for travel: ${Math.ceil(distance / 800) * 1000} PLN`}
        ></Chip>
        <Chip label={`Days: ${Math.ceil(distance / 800)} `} />
        <Chip
          label={`Total: ${
            Math.ceil(distance / 800) * 1000 + Math.round(cost * 1.1 * distance)
          } PLN`}
          color="primary"
        />
        <Button onClick={makePrint}>PRINT</Button>
      </Stack>
      <div id="map">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <Routing setDistance={setDistance} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
