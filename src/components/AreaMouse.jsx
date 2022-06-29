import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Polygon,
} from "@react-google-maps/api";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { KEY_GOOGLE_MAPS } from "../config/env";
import "./AreaMouse.css";

const googleMapsApiKey = KEY_GOOGLE_MAPS;
const libraries = ["geometry"];

const TitlePolygon = () => {
  return (
    <div className="polygon-title">
      {/* <LocationIcon size="1.5rem" fillColor="#41AA54" borderColor="#258039" /> */}
      <h2>Polygon</h2>
    </div>
  );
};

const PolygonMap = ({ isLoaded, locations, setLocations }) => {
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
  const pathsPolygon = [
    locations.marker1,
    locations.marker2,
    locations.marker3,
    locations.marker4,
  ];
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
  const onLoad = (polygon) => {
    console.log("polygon: ", polygon);
  };

  if (!isLoaded) {
    return <p>Cargando mapa...</p>;
  }

  console.log(pathsPolygon);
  // eslint-disable-next-line no-undef
  // let numberArea = google.maps.geometry.spherical.computeArea(pathsPolygon);
  // console.log(numberArea);
  const showArea = () => {
    toast.success(
      // eslint-disable-next-line no-undef
      google.maps.geometry.spherical.computeArea(pathsPolygon)
    );
  };

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
          draggable
          position={locations.marker1}
          onDrag={(e) => updateMarker1(e)}
        />
        <Marker
          draggable
          position={locations.marker2}
          onDrag={(e) => updateMarker2(e)}
        />
        <Marker
          draggable
          position={locations.marker3}
          onDrag={(e) => updateMarker3(e)}
        />
        <Marker
          draggable
          position={locations.marker4}
          onDrag={(e) => updateMarker4(e)}
        />
        <Polygon
          onLoad={onLoad}
          paths={pathsPolygon}
          options={optionsPolygon}
        />
      </GoogleMap>
      <button className="polygon-buttons1" onClick={showArea}>
        mostrar area
      </button>
      <Toaster />
    </>
  );
};

const AreaMouse = ({ setModal }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey,
    libraries,
  });
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
  const closeModal = () => setModal(false);
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

  return (
    <>
      <div className="polygon-background" onClick={closeModal}></div>
      <div className="polygon-content">
        <TitlePolygon />
        <PolygonMap
          isLoaded={isLoaded}
          locations={locations}
          setLocations={setLocations}
        />

        <div className="polygon-buttons1">
          <button onClick={getLocation}>Localizar</button>
          {/* <button>Mostrar Area</button> */}
        </div>
      </div>
    </>
  );
};

export default AreaMouse;
