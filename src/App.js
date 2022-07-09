import { useState } from "react";

import "./App.css";
import Modal from "./components/Modal";
import AreaMouse from "./components/AreaMouse";
import AreaGps from "./components/AreaGps";

function App() {
  const [modalMouse, setModalMouse] = useState(false);
  const [modalGps, setModalGps] = useState(false);

  const openModalMouse = () => setModalMouse(true);
  const openModalGps = () => setModalGps(true);

  // const ContentAdded = () => <p>Si hay contenido</p>;

  return (
    <div className="App">
      <h1 className="App-header">COMPUTE AREA</h1>
      <button className="App-button" onClick={openModalMouse}>
        Calculate with mouse
      </button>
      <button className="App-button" onClick={openModalGps}>
        Calculate with GPS
      </button>
      {modalMouse && <Modal Content={AreaMouse} setModal={setModalMouse} />}
      {modalGps && <Modal Content={AreaGps} setModal={setModalGps} />}
    </div>
  );
}

export default App;
