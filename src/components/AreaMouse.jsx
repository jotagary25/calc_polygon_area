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

export const LocationIcon = ({
  size = "1rem",
  fillColor = "#999",
  borderColor = "#666",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.50541 1.40674C6.6957 1.40674 4.88598 2.08247 3.50607 3.43393C1.33442 5.56082 0.870679 8.74007 2.12617 11.3101C2.39763 11.8529 6.25458 17.7572 7.87201 20.2275C8.03036 20.4823 8.30182 20.6041 8.57327 20.6041C8.84473 20.6041 9.10488 20.4823 9.26323 20.2275C10.8467 17.7683 14.6132 11.875 14.8847 11.3433C16.1515 8.76223 15.699 5.57189 13.5161 3.43393C12.1248 2.08247 10.3151 1.40674 8.50541 1.40674Z"
        fill="white"
      />
      <path
        d="M8.50546 1.40685C10.3152 1.40685 12.1249 2.08258 13.5048 3.43404C15.6878 5.572 16.1402 8.76234 14.8734 11.3434C14.6132 11.8862 10.8355 17.7684 9.25196 20.2276C9.09361 20.4824 8.82216 20.6042 8.56201 20.6042C8.29055 20.6042 8.03041 20.4824 7.86075 20.2276C6.24331 17.7573 2.38636 11.853 2.1149 11.3102C0.870726 8.74018 1.32315 5.56093 3.50612 3.43404C4.88603 2.08258 6.69574 1.40685 8.50546 1.40685ZM8.50546 0C6.232 0 4.09428 0.864048 2.48816 2.43706C-0.0567524 4.92951 -0.724084 8.74018 0.825483 11.9084C0.904658 12.0745 1.16481 12.5952 6.6505 20.9809C7.069 21.6234 7.78157 22 8.56201 22C9.34245 22 10.055 21.6123 10.4622 20.9698C15.8348 12.5952 16.0723 12.1188 16.1628 11.9416C17.735 8.75126 17.0677 4.92951 14.5114 2.42598C12.9053 0.864048 10.7676 0 8.50546 0Z"
        fill={borderColor}
      />
      <path
        d="M8.55056 20.6043C8.29041 20.6043 8.01896 20.4713 7.86061 20.2276C6.24317 17.7573 2.38622 11.853 2.11476 11.3102C0.870585 8.74021 1.32301 5.56095 3.50598 3.43406C4.8972 2.07152 6.72953 1.39579 8.55056 1.40687V20.6043Z"
        fill={fillColor}
      />
      <path
        d="M11.6616 7.6213C11.6616 9.44909 10.1573 10.9224 8.291 10.9224C6.42473 10.9224 4.92041 9.44909 4.92041 7.6213C4.92041 5.7935 6.42473 4.32019 8.291 4.32019C10.1573 4.32019 11.6616 5.7935 11.6616 7.6213Z"
        fill={fillColor}
      />
      <path
        d="M8.29077 11.6315C6.03993 11.6315 4.19629 9.83691 4.19629 7.6214C4.19629 5.41697 6.02862 3.61133 8.29077 3.61133C10.5529 3.61133 12.3852 5.40589 12.3852 7.6214C12.3852 9.82583 10.5416 11.6315 8.29077 11.6315ZM8.29077 5.01818C6.82037 5.01818 5.63275 6.18132 5.63275 7.6214C5.63275 9.06148 6.82037 10.2246 8.29077 10.2246C9.76116 10.2246 10.9488 9.06148 10.9488 7.6214C10.9488 6.18132 9.76116 5.01818 8.29077 5.01818Z"
        fill={borderColor}
      />
    </svg>
  );
};

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
  // const pathsPolygon = [
  //   locations.marker1,
  //   locations.marker2,
  //   locations.marker3,
  //   locations.marker4,
  // ];
  // const optionsPolygon = {
  //   fillColor: "lightblue",
  //   fillOpacity: 0.5,
  //   strokeColor: "red",
  //   strokeOpacity: 1,
  //   strokeWeight: 2,
  //   clickable: false,
  //   draggable: false,
  //   editable: false,
  //   geodesic: false,
  //   zIndex: 1,
  // };
  // const onLoadPolygon = (polygon) => {
  //   console.log("polygon: ", polygon);
  // };

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
        {/* <Marker
          onLoad={onLoadMarker}
          draggable
          position={locations.center}
          onDrag={(e) => updateMarker1(e)}
        /> */}
        {/* <Marker
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
        /> */}
      </GoogleMap>
      <button className="areamouse-buttons1" onClick={showArea}>
        mostrar area
      </button>
      <Toaster />
    </>
  );
};

const AreaMouse = () => {
  const [locations, setLocations] = useState({
    center: {
      lat: 4.631709,
      lng: -74.10427,
    },
    // marker1: {
    //   lat: 4.631709,
    //   lng: -74.10427,
    // },
    // marker2: {
    //   lat: 4.631709,
    //   lng: -74.10427,
    // },
    // marker3: {
    //   lat: 4.631709,
    //   lng: -74.10427,
    // },
    // marker4: {
    //   lat: 4.631709,
    //   lng: -74.10427,
    // },
  });

  useEffect(() => {
    getWatchLocation();
  }, []);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const defaultLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocations({
        ...locations,
        center: defaultLocation,
      });
    });
  };

  const getWatchLocation = () => {
    navigator.geolocation.watchPosition(function (position) {
      const watchLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocations({
        ...locations,
        center: watchLocation,
      });
    });
  };

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
