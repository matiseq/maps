import { useEffect } from 'react';
import L from 'leaflet';
import { useMap } from 'react-leaflet';

function Routing() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
      routeWhileDragging: true,
      // geocoder: geocoder,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
export default Routing;
