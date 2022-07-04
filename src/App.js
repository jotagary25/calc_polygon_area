import { useState } from "react";

import "./App.css";
import ModalMouse from "./components/Modal";
import AreaMouse from "./components/AreaMouse";

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
      <button className="App-button">Calculate with GPS</button>
      {/* {modalMouse && (
        <ModalMouse Content={AreaMouse} setModal={setModalMouse} />
      )} */}
      {modalMouse && (
        <ModalMouse Content={AreaMouse} setModal={setModalMouse} />
      )}
    </div>
  );
}

export default App;
