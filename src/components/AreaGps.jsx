import { useEffect, useState } from "react";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  Polygon,
} from "@react-google-maps/api";

import { KEY_GOOGLE_MAPS } from "../config/env";
import "./AreaGps.css";

const googleMapsApiKey = KEY_GOOGLE_MAPS;
const libraries = ["geometry"];

const AreaGps = () => {
  //Cargando librerias para el GoogleMap
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  const [location, setLocation] = useState({
    lat: 4.631709,
    lng: -74.10427,
  });

  useEffect(() => {
    getWatchLocation();
  }, []);

  const getWatchLocation = () => {
    navigator.geolocation.watchPosition(function (position) {
      const watchLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocation(watchLocation);
    });
  };

  if (!isLoaded) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div className="areagps">
        <GoogleMap
          center={location}
          zoom={15}
          mapContainerStyle={{ width: "100%", aspectRatio: "1 / 1" }}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
          }}
        >
          <Marker position={location} />
        </GoogleMap>
      </div>
    );
  }
};

export default AreaGps;
