import { useEffect, useContext } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import { LocationContext } from '../App';

function Routing({ setDistance }) {
  const map = useMap();
  const { locations = [] } = useContext(LocationContext);

  useEffect(() => {
    if (!map) return;

    const points = locations.slice(-1)[0];

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(points?.latStart, points?.lngStart),
        L.latLng(points?.latEnd, points?.lngEnd),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    routingControl.on('routesfound', function (e) {
      const routes = e.routes;
      const summary = routes[0].summary;
      const distance = Math.ceil(summary?.totalDistance / 1000);
      setDistance(distance);
    });

    return () => map?.removeControl(routingControl);
  }, [map, locations, setDistance]);

  return null;
}
export default Routing;
