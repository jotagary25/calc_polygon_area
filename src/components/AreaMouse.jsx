import {
  useLoadScript,
  GoogleMap,
  Marker,
  Polygon,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { KEY_GOOGLE_MAPS } from "../config/env";
import "./AreaMouse.css";

const googleMapsApiKey = KEY_GOOGLE_MAPS;
const libraries = ["geometry"];

const TitlePolygon = () => {
  return (
    <div className="areamouse-title">
      {/* <LocationIcon size="1.5rem" fillColor="#41AA54" borderColor="#258039" /> */}
      <h2>Polygon Area</h2>
    </div>
  );
};

const PolygonMap = ({ locations, setLocations }) => {
  // Estado para Cargar el MAP
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  // Funciones para Actualizar el MARKER
  const updateMarker1 = (e) => {
    setLocations({
      ...locations,
      marker1: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    });
  };
  const updateMarker2 = (e) => {
    setLocations({
      ...locations,
      marker2: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    });
  };
  const updateMarker3 = (e) => {
    setLocations({
      ...locations,
      marker3: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    });
  };
  const updateMarker4 = (e) => {
    setLocations({
      ...locations,
      marker4: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    });
  };

  // Estado del componente POLYGON
  const optionsPolygon = {
    fillColor: "lightblue",
    fillOpacity: 0.5,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };
  const onLoadPolygon = (polygon) => {
    console.log("polygon: ", polygon);
  };
  const pathsPolygon = [
    locations.marker1,
    locations.marker2,
    locations.marker3,
    locations.marker4,
  ];

  // Estado del componente MARKER
  const onLoadMarker = (marker) => {
    console.log("marker: ", marker);
  };

  //Función para calcular y mostart el AREA
  const showArea = () => {
    toast.success(
      // eslint-disable-next-line no-undef
      google.maps.geometry.spherical.computeArea(pathsPolygon)
    );
  };

  console.log(pathsPolygon);
  console.log(locations);

  // Componente MAP
  if (!isLoaded) {
    return <p>Cargando mapa...</p>;
  }
  return (
    <>
      <GoogleMap
        center={locations.center}
        zoom={15}
        mapContainerStyle={{ width: "100%", aspectRatio: "1 / 1" }}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        <Marker
          onLoad={onLoadMarker}
          draggable
          position={locations.marker1}
          onDrag={(e) => updateMarker1(e)}
        />
        <Marker
          onLoad={onLoadMarker}
          draggable
          position={locations.marker2}
          onDrag={(e) => updateMarker2(e)}
        />
        <Marker
          onLoad={onLoadMarker}
          draggable
          position={locations.marker3}
          onDrag={(e) => updateMarker3(e)}
        />
        <Marker
          onLoad={onLoadMarker}
          draggable
          position={locations.marker4}
          onDrag={(e) => updateMarker4(e)}
        />
        <Polygon
          onLoad={onLoadPolygon}
          paths={pathsPolygon}
          options={optionsPolygon}
        />
      </GoogleMap>
      <button className="areamouse-buttons1" onClick={showArea}>
        mostrar area
      </button>
      <Toaster />3
    </>
  );
};

const AreaMouse = () => {
  const [locations, setLocations] = useState({
    center: {
      lat: 4.631709,
      lng: -74.10427,
    },
    marker1: {
      lat: 4.631709,
      lng: -74.10427,
    },
    marker2: {
      lat: 4.631709,
      lng: -74.10427,
    },
    marker3: {
      lat: 4.631709,
      lng: -74.10427,
    },
    marker4: {
      lat: 4.631709,
      lng: -74.10427,
    },
  });

  // useEffect(() => {
  //   getWatchLocation();
  // }, []);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const defaultLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocations({
        ...locations,
        center: defaultLocation,
        marker1: defaultLocation,
        marker2: defaultLocation,
        marker3: defaultLocation,
        marker4: defaultLocation,
      });
    });
  };

  // const getWatchLocation = () => {
  //   navigator.geolocation.watchPosition(function (position) {
  //     const watchLocation = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     };
  //     setLocations({
  //       ...locations,
  //       center: watchLocation,
  //     });
  //   });
  // };

  return (
    <div className="areamouse">
      <TitlePolygon />
      <PolygonMap locations={locations} setLocations={setLocations} />

      <button className="areamouse-buttons1" onClick={getLocation}>
        Localizar
      </button>
    </div>
  );
};

export default AreaMouse;
