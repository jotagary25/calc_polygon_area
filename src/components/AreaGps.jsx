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
  // Cargando librerias para el GoogleMap
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  // Estado para la localización
  const [location, setLocation] = useState({
    lat: 4.631709,
    lng: -74.10427,
  });
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocation(currentPosition);
    });
  };
  const getWatchLocation = () => {
    navigator.geolocation.watchPosition((position) => {
      const watchLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocation(watchLocation);
    });
  };

  // Estado para el Polygono
  const [pathsPolygon, setPathsPolygon] = useState([]);
  const optionsPolygon = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zindex: 1,
  };
  const updatePathsPolygon = () => {
    const newLocation = [location];
    const newPolygon = [...pathsPolygon, ...newLocation];
    console.log(newPolygon);
    setPathsPolygon(newPolygon);
  };

  // Estado para mostrar Datos
  const [area, setArea] = useState(999);
  const updateArea = () => {
    // eslint-disable-next-line no-undef
    const newArea = google.maps.geometry.spherical.computeArea(pathsPolygon);
    setArea(newArea);
  };

  if (!isLoaded) {
    return <p>Cargando...</p>;
  } else {
    return (
      <div className="areagps">
        <GoogleMap
          onLoad={getCurrentPosition}
          center={location}
          zoom={15}
          mapContainerStyle={{ width: "100%", aspectRatio: "1 / 1" }}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
          }}
        >
          <Marker onLoad={getWatchLocation} position={location} />
          <Polygon paths={pathsPolygon} options={optionsPolygon} />
        </GoogleMap>
        <div className="areagps-data">
          <h2>Mostrando 5</h2>
          <p>{area} m²</p>
          <div className="areagps-data-buttons">
            <button onClick={updatePathsPolygon}>Marcar</button>
            <button onClick={updateArea}>Mostrar Area</button>
          </div>
        </div>
      </div>
    );
  }
};

export default AreaGps;
