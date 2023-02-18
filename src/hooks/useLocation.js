import { useEffect, useState } from 'react';

export function useLocation() {
  const [position, setPosition] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lookup = require('coordinate_to_country');
        setPosition(lookup(pos.coords.latitude, pos.coords.longitude));
      });
    } else {
      setPosition('you');
    }
  }, []);
  return position;
}